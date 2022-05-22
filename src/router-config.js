export default [
  {
    path: "/",
    redirect: "/official",
  },
  {
    path: "/official",
    component: (resolve) => require(["./Official.vue"], resolve),
    children: [
      {
        path: "",
        component: (resolve) => require(["./pages/Home.vue"], resolve),
      },
      {
        path: "how-to-use",
        component: (resolve) => require(["./pages/HowToUse.vue"], resolve),
      },
      {
        path: "xdrop-detail/:id",
        name: 'xdropdetail',
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
