<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex md11 class="bread-size">Dashboard</v-flex>
      <v-flex md1>
        <v-icon color="blue" @click="$router.push({ name: 'Search' })">search</v-icon>
      </v-flex>
      <v-flex md1>
        <v-icon color="blue" @click="$router.push({ name: 'Home' })">home</v-icon>
      </v-flex>
    </v-layout>
    <div style="width:100%; height:100%">
      <v-card>
        <h5 style="font-weight: bold;">Diagnosis Analysis</h5>
        <br />
        <!-- <oracle-dv
          style="position: absolute; width:100%; height:1000%"
          project-path="/@Catalog/shared/Humana/Claims_Dash"
          active-page="canvas"
          active-tab-id="1"
        ></oracle-dv> -->
        <img src="@/assets/analytics/diagnosis.png" height="650" width="1150" />
      </v-card>
    </div>
    <br />
    <!-- <v-layout>
      <v-flex class="spacer-width"></v-flex>
    </v-layout> -->
    <div style="width:100%; height:100%">
      <v-card>
        <h5 style="font-weight: bold;">Abandoned Claims</h5>
        <br />
        <!-- <oracle-dv
          style="position: absolute; width:100%; height:1400%;"
          project-path="/@Catalog/shared/Humana/Claims_Dash"
          active-page="canvas"
          active-tab-id="9"
        ></oracle-dv> -->
        <img src="@/assets/analytics/abandoned.png" height="650" width="1150" />
      </v-card>
    </div>
    <br />
    <!-- <v-layout>
      <v-flex class="spacer-width"></v-flex>
    </v-layout> -->
    <!-- <v-layout>
      <v-flex class="spacer-min-width"></v-flex>
    </v-layout> -->
    <div style="width:100%; height:100%">
      <v-card>
        <h5 style="font-weight: bold;">TPA Time</h5>
        <br />
        <!-- <oracle-dv
          style="position: absolute; width:100%; height:1400%;"
          project-path="/@Catalog/shared/Humana/Claims_Dash"
          active-page="canvas"
          active-tab-id="5"
        ></oracle-dv> -->
        <img src="@/assets/analytics/map.png" height="650" width="1150" />
      </v-card>
    </div>
    <!-- <v-layout>
      <v-flex class="spacer-width"></v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="spacer-width"></v-flex>
    </v-layout> -->
  </v-container>
</template>

<script>
module.exports = {
  data: function() {
    return {
      greeting: "Hello"
    };
  },
  mounted() {
    // if (localStorage.getItem("reloaded")) {
    //   localStorage.removeItem("reloaded");
    //   let recaptchaScript = document.createElement("script");
    //   recaptchaScript.setAttribute(
    //     "src",
    //     "https://oacdemo-orasenatdpltintegration02.analytics.ocp.oraclecloud.com/dv/ui/api/v1/plugins/embedding/standalone/embedding.js"
    //   );
    //   document.head.appendChild(recaptchaScript);
    //   window.addEventListener("load", function(event) {
    //     requirejs(
    //       [
    //         "knockout",
    //         "ojs/ojcore",
    //         "ojs/ojknockout",
    //         "ojs/ojcomposite",
    //         "jet-composites/oracle-dv/loader"
    //       ],
    //       function(ko) {
    //         ko.applyBindings();
    //       }
    //     );
    //   });
    // } else {
    //   localStorage.setItem("reloaded", "1");
    //   location.reload();
    // }
  }
};
</script>

<style>
p {
  font-size: 2em;
  text-align: center;
}
.spacer-width {
  margin-bottom: 45%;
}
.spacer-min-width {
  margin-bottom: 17%;
}
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
</style>
