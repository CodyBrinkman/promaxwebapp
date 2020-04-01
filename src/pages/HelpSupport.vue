<!--
  Issues:
  * Heading center
  * Search bar - Outlined and Curved
 -->
<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex md11 class="bread-size">Help and Support</v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Search' })">search</v-icon></v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Home' })">home</v-icon></v-flex>
    </v-layout>
    <v-layout row>
      <v-flex class="heading-margin custom-font custom-font-color">
        <h2>How can we help you today?</h2>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex>
        <v-text-field
          class="toolbar-position"
          placeholder="Your Questions..."
          prepend-inner-icon="search"
          solo
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex class="col-margin" md4>
        <v-card class="v-card-profile" height="175">
          <v-avatar tile class="icon-position" size="50">
            <img class="tile" src="https://imgur.com/Ig8fyYk.jpg" />
          </v-avatar>
          <v-card-text>
            <h3 class="text-center font-weight-bold">Guides</h3>
            <br />
            <div class="desc-position custom-font">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex class="col-margin" md4>
        <v-card class="v-card-profile" height="175">
          <v-avatar tile class="icon-position" size="50">
            <img src="https://imgur.com/xByENfT.jpg" />
          </v-avatar>
          <v-card-text >
            <h3 class="text-center font-weight-bold">FAQ</h3>
            <br />
            <div class="desc-position custom-font">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex class="col-margin" md4>
        <v-card class="v-card-profile" height="175">
          <v-avatar tile class="icon-position" size="50">
            <img src="https://imgur.com/IdXDwW1.jpg" />
          </v-avatar>
          <v-card-text class="text-center">
            <h3 class="font-weight-bold">Community</h3>
            <br />
            <div class="desc-position custom-font">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex class="spacer-width">
      </v-flex>
  </v-container>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");
.icon-position {
  margin-top: 8%;
  margin-left: 35%;
}
.ratings-size {
  height: 2%;
  width: 2%;
}
.col-margin {
  margin-top: 0%;
  margin-right: -7%;
  margin-left: 5%;
}
.desc-position {
  margin-top: -5%;
  margin-bottom: -3%;
  font-size: 75%
}
.custom-font {
  font-family: "Poppins", sans-serif;
}
.custom-font-color {
  color: rgb(2, 154, 212);
}
.card-text {
  margin-top: -5%;
}
.v-card-profile {
  border-radius: 5%;
  width: 75%;
  height: 71%;
}
.toolbar-position {
  margin-left: 5%;
  margin-top: 2%;
  border-radius: 25px;
  width: 88%;
}
.spacer-width {
  margin-bottom: 75%;
}
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
</style>
