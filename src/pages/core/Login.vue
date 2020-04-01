<!-- Issues:
  * Text field & Login Button Height (Optional)
  * Remember Me and Forgot Password spacing
  * Alignment of Login Label (Optional)
  Testing - Bigger Screens
 -->
<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex md6 class="bg-image">
          </v-flex>
          <v-flex md6>
            <v-card class="elevation-1 pa-3 login-size">
              <v-card-text>
                <div class="layout column align-center login-img">
                  <img src="@/assets/payers/promax.png" height="150" width="150" />
                </div>
                <div class="login-title">
                  <label>Login</label>
                </div>
                <v-form class="form-position">
                  <v-text-field
                    name="login"
                    type="text"
                    solo
                    v-model="userEmail"
                    :error="error"
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    name="password"
                    label="Password"
                    id="password"
                    solo
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"
                  />
                  <v-layout row>
                    <v-flex md6>
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="defaultLoginFormRemember"
                      />&nbsp;
                      <label
                        class="custom-control-label"
                        for="defaultLoginFormRemember"
                      >Remember me</label>
                    </v-flex>
                    <v-flex md6 class="password-position">
                      <a href>Forgot password?</a>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  depressed
                  large
                  color="primary"
                  class="login-button-style"
                  @click="login"
                  :loading="loading"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar v-model="showResult" :timeout="2000" top>{{ result }}</v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      userEmail: "test",
      password: "test",
      hidePassword: true,
      error: false,
      showResult: false,
      result: "",
      rules: {
        required: value => !!value || "Required."
      }
    };
  },

  methods: {
    login() {
      const vm = this;

      if (!vm.userEmail || !vm.password) {
        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

      if (
        vm.userEmail === vm.$root.userEmail &&
        vm.password === vm.$root.userPassword
      ) {
        vm.$router.push({ name: "Dashboard" });
      } else {
        vm.error = true;
        vm.result = "Email or Password is incorrect.";
        vm.showResult = true;
      }
    }
  }
};
</script>

<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/css?family=Roboto");
.container {
  height: 101vh;
  overflow: auto;
}
.bg-image {
  background-image: url("~@/assets/icons/home-page.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 101vh;
  overflow: auto;
  margin-left: -5%;
}
.login-size {
  height: 101vh;
  width: 101vh;
}
.login-button-style {
  margin-top: 22%;
  margin-left: 20%;
  width: 50%;
}
.login-img {
  margin-left: -12%;
  margin-top: 5%;
}
.login-title {
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: rgb(2, 154, 212);
  margin-left: 40%;
  margin-top: 0%;
  margin-bottom: 18%;
}
.password-position {
  margin-left: 20%;
}
.form-position {
  width: 50%;
  margin-left: 20%;
  margin-bottom: -18%;
  margin-top: 2%;
}
</style>
