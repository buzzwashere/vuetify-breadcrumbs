<template>
  <div>
    <v-breadcrumbs 
      :items="breadcrumbs"
    >
      <template #item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
          @click="onClick"
        >
        {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    // data: () => ({
    //   lastCrumbs: []
    // }),
    methods: {
      onClick(args) {
        console.log('breadcrumb onClick ... ' + args.target.outerText);
      }
    },
    computed: {
      breadcrumbs: function() {
        let lastCrumbs;
        let pathArray = [];
        const hash = this.$router.mode === 'hash' ? '#' : '';
        pathArray = this.$route.path.split("/");
        pathArray.shift();

        console.warn('breadcrumb redetermination')
        let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
          const matched = this.$route.matched[idx];
          if (matched) {
            // truncate params from matched path
            const colonPos = matched.path.indexOf(':');
            const matchedPath = matched.path.substr(0, colonPos > 0 ? colonPos - 1 : matched.path.length);
            const breadcrumbObj = {
              path: path,
              disabled: idx < pathArray.length-1 ? false : true,
              href: hash + matchedPath,
              text: matched ? matched.meta?.breadCrumb : path,
            };
            breadcrumbArray.push(breadcrumbObj);
            console.log(idx + '\tmatched path object: ' + JSON.stringify(breadcrumbObj, 3, null));
          } else {
            const nonroutable_path_Obj = {
              path: path,
              disabled: true,
              text: path,
            };
            breadcrumbArray.push(nonroutable_path_Obj);
            console.log(idx + '\tunmatchable path object: ' + JSON.stringify(nonroutable_path_Obj, 3, null));
          }
          return breadcrumbArray;
        }, [])
        
        // console.log('breadcrumbs (array): ' + JSON.stringify(breadcrumbs, null, 3));
        
        if (breadcrumbs.length>0) {
          lastCrumbs = breadcrumbs;
          return breadcrumbs;
        }
        return lastCrumbs;
      }
    }
  }
// breadcrumbArray.push({
//   path: path,
//   disabled: idx < pathArray.length-1 ? false : true,
//   href: hash + (matched ? matched.path : path),
//   to: hash + '/' + path,
//   text: matched ? matched.meta.breadCrumb : path,
// });
</script>

<style lang="scss" scoped>

</style>