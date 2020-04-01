<!--
  Issues:
  * Hardcoded
 -->
<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex md11 class="bread-size">Notification</v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Search' })">search</v-icon></v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Home' })">home</v-icon></v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md6>
        <v-card class="v-card-profile" height="75">
          <v-card-text>
            <p class="left-text"><span class="font-weight">Dr. Smith</span> raised a request for John’s medical bill in an <span class="network">out of network claim</span></p>
            <p class="left-text">3 Months Ago</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md6>
        <v-card class="v-card-profile" height="75">
          <v-card-text>
            <p class="left-text"><span class="font-weight">Dr. Smith</span> raised a request for John’s medical bill in an <span class="network">out of network claim</span></p>
            <p class="left-text">3 Months Ago</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md6>
        <v-card class="v-card-profile" height="75">
          <v-card-text>
            <p class="left-text"><span class="font-weight">Dr. Smith</span> raised a request for John’s medical bill in an <span class="network">out of network claim</span></p>
            <p class="left-text">3 Months Ago</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md6>
        <v-card class="v-card-profile" height="75">
          <v-card-text>
            <p class="left-text"><span class="font-weight">Dr. Smith</span> raised a request for John’s medical bill in an <span class="network">out of network claim</span></p>
            <p class="left-text">3 Months Ago</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md6>
        <v-card class="v-card-profile" height="75">
          <v-card-text>
            <p class="left-text"><span class="font-weight">Dr. Smith</span> raised a request for John’s medical bill in an <span class="network">out of network claim</span></p>
            <p class="left-text">3 Months Ago</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md6>
        <v-card class="v-card-profile" height="75">
          <v-card-text>
            <p class="left-text"><span class="font-weight">Dr. Smith</span> raised a request for John’s medical bill in an <span class="network">out of network claim</span></p>
            <p class="left-text">3 Months Ago</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="spacer-width">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style scoped>
.font-weight {
  font-weight: bold;
}
.network {
  color: rgb(2, 154, 212);
  font-weight: bold;
}
.left-text {
  text-align: left;
}
.notification-size {
  margin-left: 5%;
  margin-right: 5%;
  height: -2%;
}
.v-card-profile {
  margin-top: 2%;
  border-radius: 5%;
}
.spacer-width {
  margin-bottom: 75%;
}
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
</style>
