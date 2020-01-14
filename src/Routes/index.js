import AuthComponent from "../components/AuthComponent/AuthComponent";
import ExecuteCaseComponent from "../components/ExecuteCaseComponent/ExecuteCaseComponent";
import HomeComponent from "../components/HomeComponent/HomeComponent";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent/PrivacyPolicyComponent";

const Routes = [
  {
    path: '/',
    component: HomeComponent,
    id: 1
  },
  {
    path: '/:route/:id',
    component: ExecuteCaseComponent,
    id: 2
  },
  {
    path: '/privacy_policy',
    component: PrivacyPolicyComponent,
    id: 3
  },
  {
    path: '/auth',
    component: AuthComponent,
    id: 4
  }
];

export default Routes;
