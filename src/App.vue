<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <BreadCrumbs1 />
      <v-btn @click="changeBreadcrumbs('/foo')">Foo</v-btn>
      <v-btn @click="changeBreadcrumbs('/bar/2/xyz')">Bar</v-btn>
      <v-btn @click="changeBreadcrumbs('/foo/baz/buzz')">Foo/Baz/Buzz</v-btn>
      <v-btn @click="changeBreadcrumbs('/foo/baz/baz2')">Foo/Baz/Baz2</v-btn>
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
import BreadCrumbs1 from './components/BreadCrumbs1';

export default {
  name: 'App',

  components: {
    BreadCrumbs1
  },

  data: () => ({
  }),
  methods: {
    changeBreadcrumbs(route) {
      // console.log('changeBreadcrumbs route: ' + route)
      this.$router.push(route);
    }
  },
};
</script>