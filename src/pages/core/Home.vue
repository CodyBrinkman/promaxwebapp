<!-- Issues:
  * Image alignment - Crop!
 -->
<template>
  <v-container fluid>
    <v-layout row>
      <v-flex md6 class="text-position-1">
        <p class="text-style-1">Caring for better life.</p>
        <br />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md6 class="text-position-2">
        <p class="text-style font-weight-bold">
          Leading the way in
          <br />medical excellence.
        </p>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md6 class="text-position-3">
        <p class="text-style-1">
          Earth greater grass for good. Place for divide evening yielding
          <br />them that. Creeping beginning over gathered brought.
        </p>
        <br />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md6>
        <v-btn class="dark btn-size" @click="login">Let's get Started</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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

      {
        vm.$router.push({ name: "Login" });
      }
    }
  }
};
</script>

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css?family=Poppins");
.container {
  background-image: url("~@/assets/tpa/multiplan_home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 101vh;
  overflow: auto;
}
.text-position-1 {
  margin-top: 18%;
  margin-bottom: -2%;
  margin-left: 5%;
}

.text-position-2 {
  margin-left: 5%;
}

.text-position-3 {
  margin-left: 5%;
}
.text-style {
  font-size: 43px;
  font-family: "Poppins", sans-serif;
  line-height: 120%;
}
.text-style-1 {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
.position {
  margin-left: 5%;
}
.btn-size {
  background-image: linear-gradient(
    to right,
    #3773d4 0%,
    #59a3c5 51%,
    #5ec2cf 100%
  );
  font-family: "Poppins", sans-serif;
  border-radius: 5%;
  margin-left: 10%;
}
</style>
