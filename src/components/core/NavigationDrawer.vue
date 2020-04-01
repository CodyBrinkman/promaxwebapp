<!--
  Issues:
  * Icons not matching and highlighting part
  * Logout and Home Button at the bottom
 -->
<template>
  <v-navigation-drawer v-model="toggle" fixed app :width="225">
    <br/>
    <v-toolbar flat light :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <img src="@/assets/payers/promax.png" width="170px" height="150px" />
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('Dashboard', 1)">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]">Dashboard</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Claims', 2)">
        <v-list-tile-action>
          <v-icon>note_add</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Claim Request</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Providers', 3)">
        <v-list-tile-action>
          <v-icon>local_hospital</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">Providers</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Pharmacies', 4)">
        <v-list-tile-action>
          <v-icon>local_pharmacy</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">Pharmacies</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Notifications', 5)">
        <v-list-tile-action>
          <v-icon>notification_important</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Notifications</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('HelpSupport', 6)">
        <v-list-tile-action>
          <v-icon>help_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title
          :class="[{'active': selectedIndex === 6}, 'item-title' ]">Help and Support</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="$router.push({ name: 'Login' })">
        <v-list-tile-action>
          <v-icon >exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="['item-title' ]">Logout</v-list-tile-title>
      </v-list-tile>

      <!-- <v-list-tile @click="$router.push({ name: 'Home' })">
        <v-list-tile-action>
          <v-icon>cancel</v-icon>
        </v-list-tile-action>
      </v-list-tile> -->
    </v-list>
    
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      admins: [["Management", "people_outline"], ["Settings", "settings"]]
    };
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
};
</script>

<style>
.toolbar .text {
  color: white;
  text-decoration: none;
}

.item-title {
  font-size: 14px;
}

.active {
  font-weight: bold;
}
</style>
