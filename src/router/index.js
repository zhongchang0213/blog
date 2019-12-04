import Home from '../pages/Home/Home';
import User from '../pages/User/User';
import Articel from '../pages/Articel/Articel';

const router = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    icon: ''
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    icon: ''
  },
  {
    path: 'article',
    name: '文章',
    component: Articel,
    icon: ''
  },
];

export default router;
