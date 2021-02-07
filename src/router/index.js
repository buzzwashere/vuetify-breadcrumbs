// 1. Define route components.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Climate from '../views/Climate.vue';
import Economy from '../views/Economy.vue';
import Democracy from '../views/Democracy.vue';
import Maps from '../components/climate/Maps.vue';
import Co2 from '../components/climate/Co2.vue';
import Bar from '../components/Bar.vue';
import Baz from '../components/Baz.vue';
import Baz2 from '../components/Baz2.vue';

Vue.use(VueRouter);

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { 
    path: '/', 
    name: 'home', 
    components: { default: Home } ,
    meta: { breadCrumb: 'home' },
  },
  // { 
  //   path: '/climate', 
  //   name: 'climate', 
  //   components: { default: Climate } ,
  //   meta: { breadCrumb: 'climate' },
  // },
  { 
    path: '/economy', 
    name: 'economy', 
    components: { default: Economy } ,
    meta: { breadCrumb: 'economy' },
  },
  { 
    path: '/democracy', 
    name: 'democracy', 
    components: { default: Democracy } ,
    meta: { breadCrumb: 'democracy' },
  },
  { 
    path: '/climate', 
    name: 'climate', 
    meta: { breadCrumb: 'climate' },
    component: Climate,
    children: [
      {
        path: '/climate/maps', 
        name: 'maps', 
        meta: { breadCrumb: 'maps' },
        component: Maps,
        children: [
          {
            path: 'hemi/:id?',
            name: 'maps-hemi',
            meta: { breadCrumb: 'hemi' },
            component: Baz,
            children: [
              {
                path: 'northern',
                name: 'northern',
                meta: { breadCrumb: 'northern' },
                component: Baz2,
              },
            ]
          }
        ]
      },
      {
        path: '/climate/co2', 
        name: 'co2', 
        meta: { breadCrumb: 'co2' },
        component: Co2,
        children: [
          {
            path: 'baz/:id?',
            name: 'baz',
            meta: { breadCrumb: 'baz' },
            component: Baz,
            children: [
              {
                path: 'baz2',
                name: 'baz2',
                meta: { breadCrumb: 'baz2' },
                component: Baz2,
              },
            ]
          }
        ]
      },
      { 
        path: 'bar/:id/:another', 
        name: 'bar', 
        component: Bar ,
        meta: { breadCrumb: 'bar' },
        props: true,
      }
    ]
  },
  // { 
  //   path: '/climate/bar/:id/:another', 
  //   name: 'bar', 
  //   component: Bar ,
  //   meta: { breadCrumb: 'bar' },
  //   props: true,
  // }
]

const router = new VueRouter({
  routes
})
export default router;


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
// const router = new VueRouter({
//   routes      // short for `routes: routes`
// })

// // 1. Define route components.
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Home from '../components/Home.vue';
// import Foo from '../components/Foo.vue';
// import Bar from '../components/Bar.vue';
// import Baz from '../components/Baz.vue';
// import Baz2 from '../components/Baz2.vue';

// Vue.use(VueRouter);

// // 2. Define some routes
// // Each route should map to a component. The "component" can
// // either be an actual component constructor created via
// // `Vue.extend()`, or just a component options object.
// // We'll talk about nested routes later.
// const routes = [
//   { 
//     path: '/', 
//     name: 'home', 
//     components: { default: Home } ,
//     meta: { breadCrumb: 'home' },
//   },
//   { 
//     path: '/foo', 
//     name: 'foo', 
//     meta: { breadCrumb: 'foo' },
//     component: Foo,
//     children: [
//       {
//         path: 'baz/:id?',
//         name: 'baz',
//         meta: { breadCrumb: 'baz' },
//         component: Baz,
//         children: [
//           {
//             path: 'baz2',
//             name: 'baz2',
//             meta: { breadCrumb: 'baz2' },
//             component: Baz2,
//           },
//         ]
//      },
//     ]
//   },
//   { 
//     path: '/bar/:id/:another', 
//     name: 'bar', 
//     component: Bar ,
//     meta: { breadCrumb: 'bar' },
//     props: true,
//   }
// ]

// const router = new VueRouter({
//   routes
// })
// export default router;
