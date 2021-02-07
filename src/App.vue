<template>
  <v-app>
    
    <top-nav />
    <side-nav />

    <v-main>
      <v-container fluid>
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import TopNav from '@/components/layout/TopNav.vue';
import SideNav from '@/components/layout/SideNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    SideNav
  },

  data: () => ({
  }),
};
</script>
<style>
.a-router-link {
  text-decoration: none !important;
}
</style>