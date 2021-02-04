// 1. Define route components.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Dude from '../components/Dude.vue';
import Foo from '../components/Foo.vue';
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
    name: 'dude', 
    components: { default: Dude } ,
    meta: { breadCrumb: 'dude' },
  },
  { 
    path: '/foo', 
    name: 'foo', 
    meta: { breadCrumb: 'foo' },
    component: Foo,
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
     },
    ]
  },
  { 
    path: '/bar/:id/:another', 
    name: 'bar', 
    component: Bar ,
    meta: { breadCrumb: 'bar' },
    props: true,
  }
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
