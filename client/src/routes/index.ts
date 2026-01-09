import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const Preview = lazy(() => import('@/pages/preview'));
const Projects = lazy(() => import('@/pages/projects'));
const Pricing = lazy(() => import('@/pages/pricing'));
const Community = lazy(() => import('@/pages/community'));
const Project = lazy(() => import('@/pages/project'));
const View = lazy(() => import('@/pages/view'));

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/pricing', component: Pricing },
  { path: '/projects', component: Projects },
  { path: '/projects/:slug', component: Project },
  { path: '/preview/:slug', component: Preview },
  { path: '/preview/:slug/:id', component: Preview },
  { path: '/community', component: Community },
  { path: '/view/:slug', component: View },
];
