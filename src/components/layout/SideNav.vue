<template>
  <!-- <v-card> -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item class="px-2">
        <!-- <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title> -->

        <div style="margin-left: 8px !important">
          <v-icon>
            mdi-lightbulb-on-outline
          </v-icon>
        </div>

        <v-spacer></v-spacer>
        
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon
            v-show="!mini"
          >
            mdi-chevron-left
          </v-icon>
          <!-- <v-icon
            v-show="mini"
          >
            mdi-chevron-right
          </v-icon> -->
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <router-link
          v-for="item in items"
          :key="item.title"
          :to="item.route"
        >

          <v-list-item link>
            <!-- <router-link :to="item.route"> -->
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city', route: '/' },
          { title: 'Climate', icon: 'mdi-pine-tree', route: '/climate' },
          { title: 'Democracy', icon: 'mdi-sausage', route: '/democracy' },
          { title: 'Economy', icon: 'mdi-bank', route: '/economy' },
          // { title: 'Home', icon: 'mdi-home-city', route: '/foo' },
          // { title: 'My Account', icon: 'mdi-account', route: '/bar' },
          // { title: 'Users', icon: 'mdi-account-group-outline', route: 'foo/baz/baz2' },
        ],
        mini: true,
      }
    },
  }
</script>

<style scoped>
.v-list a {
  text-decoration: none;
}
</style>