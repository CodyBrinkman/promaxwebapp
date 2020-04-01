<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <!-- <toolbar @toggleNavigationBar="drawer = !drawer"/> -->
          <navigation :toggle="drawer"/>
          <v-content class="background-color">
            <!-- <breadcrumbs /> -->
            <router-view/>
            <!-- <page-footer /> -->
          </v-content>
        </div>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<style scoped>
.background-color {
  background-color: rgba(228, 228, 228);
}
</style>
