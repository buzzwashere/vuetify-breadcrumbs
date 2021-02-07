<template>
  <div>
    Climate Map View

    <div class="map-links mt-2">
      <router-link to="/climate/maps/hemi/western" class="a-router-link mr-5">
        Western Hemisphere
      </router-link>
      <router-link to="/climate/maps/hemi/eastern" class="a-router-link mr-5">
        Eastern Hemisphere
      </router-link>
      <!-- must use 'name' instead of 'path' when using params -->
      <router-link :to="{name: 'maps-hemi', params: { id: id }}" class="a-router-link mr-5">
        Northern Hemisphere
      </router-link>
      <router-link to="/climate/maps/hemi/southern" class="a-router-link mr-5">
        Southern Hemisphere
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 'southernalso'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>