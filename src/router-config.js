export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/official",
    redirect: "/home",
  },
  {
    path: "/",
    component: (resolve) => require(["./Official.vue"], resolve),
    children: [
      {
        path: "home",
        component: (resolve) => require(["./pages/Home.vue"], resolve),
      },
      {
        path: "how-to-use",
        component: (resolve) => require(["./pages/HowToUse.vue"], resolve),
      },
      {
        path: "XDrop/:id",
        name: 'XDrop',
        component: (resolve) => require(["./pages/xdropDetail.vue"], resolve),
      }
      // ,
      // {
      //   path: "jobs",
      //   component: (resolve) => require(["./pages/Jops.vue"], resolve),
      // }
    ]
  },
  {
    path: "/privacy-policy",
    component: (resolve) => require(["./pages/PrivacyPolicy.vue"], resolve),
  }
];
