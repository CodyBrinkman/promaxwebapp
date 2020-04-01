<template>
  <v-toolbar dark app :color="$root.themeColor">
    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator" :ripple="false">
        <v-avatar size="42px">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
          />
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item,index) in items"
          :key="index"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          @click="item.click"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {
      rating: null,
      dialog: false,
      dialogSettings: false,
      switchEmailNotification: true,
      showPassword: null,
      showPasswordConfirm: null,
      userEmail: null,
      password: null,
      passwordConfirm: null,
      error: false,
      showResult: false,
      result: "",
      items: [
        {
          icon: "exit_to_app",
          href: "#",
          title: "Log Out",
          click: () => {
            const vm = this;

            vm.$router.push({ name: "Login" });
          }
        },
        {
          icon: "exit_to_app",
          href: "#",
          title: "Home",
          click: () => {
            const vm = this;

            vm.$router.push({ name: "Home" });
          }
        }
      ]
    };
  },

  // methods: {
  //   toggleNavigationBar() {
  //     const vm = this;

  //     vm.$emit("toggleNavigationBar");
  //   },

  //   setUpSettings() {
  //     const vm = this;

  //     if (
  //       vm.userEmail === null ||
  //       vm.password === null ||
  //       vm.passwordConfirm === null
  //     ) {
  //       vm.result = "Email and Password can't be null.";
  //       vm.showResult = true;

  //       return;
  //     }

  //     if (vm.password !== vm.passwordConfirm) {
  //       vm.error = true;
  //       vm.result = "Passwords does not match the confirm password.";
  //       vm.showResult = true;

  //       return;
  //     }

  //     vm.$root.userEmail = vm.userEmail;
  //     vm.$root.userPassword = vm.password;

  //     vm.result = "Email and password changed succesfully.";
  //     vm.showResult = true;

  //     vm.dialogSettings = false;
  //   }
  // }
};
</script>
