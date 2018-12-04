import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// The other components will be lazy loaded

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.',
        },
        {
          name: 'robots',
          content: 'noindex,nofollow',
        },
      ],
    },
  },
  {
    path: '/read/:hash?',
    name: 'readSecret',
    // route level code-splitting
    // this generates a separate chunk (how-it-works.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "how-it-works" */ './views/Read.vue'),
    meta: {
      title: 'Read a secret',
      metaTags: [
        {
          name: 'description',
          content: 'Read a secret you received',
        },
        {
          property: 'og:description',
          content: 'Read a secret you received',
        },
        {
          name: 'robots',
          content: 'noindex,nofollow',
        },
      ],
    },
  },
  {
    path: '/how-it-works',
    name: 'howItWorks',
    // route level code-splitting
    // this generates a separate chunk (how-it-works.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "how-it-works" */ './views/HowItWorks.vue'),
    meta: {
      title: 'How it works',
      metaTags: [
        {
          name: 'description',
          content: 'The how it works of our example app.',
        },
        {
          property: 'og:description',
          content: 'The how it works of our example app.',
        },
        {
          name: 'robots',
          content: 'noindex,nofollow',
        },
      ],
    },
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el =>
    el.parentNode.removeChild(el),
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
  return undefined;
});

export default router;
