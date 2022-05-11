import { lazy } from 'react';

const Content = lazy(() =>
  import('../profile/Content/Content')
    .then(({ Content }) => ({ default: Content })),
);

const Mune = lazy(() =>
  import('../profile/Content/Content')
    .then(({ Content }) => ({ default: Content })),
);



const Routes = [
  {
    path: "/:locale/hallo",
    component: Content,
    exact: true
  },
  {
    path: "/:locale/menu",
    component: Mune,
    exact: true
  },
  // {
  //   path: '*',
  //   component: NotMatchPage,
  // },
];

export default Routes;