<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        class="my-4"
      >
        <v-toolbar>
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
          <v-toolbar-title>Climate</v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link to="/climate/maps" class="a-router-link">
            <v-btn icon title="Maps">
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </router-link>
          <router-link to="/climate/co2" class="a-router-link">
            <v-btn icon title="CO2">
              <v-icon>mdi-molecule-co2</v-icon>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-col>
    </v-row>

    <bread-crumbs />
      
    <router-view />
    
  </div>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs';

export default {
  components: {
    BreadCrumbs
  },
}
</script>

<style lang="scss" scoped>
</style>