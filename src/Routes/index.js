import HomeComponent from "../components/HomeComponent/HomeComponent";
import ExecuteCase from "../components/ExecuteCaseComponent/ExecuteCase";
import PrivacyPolicy from "../components/PrivacyPolicyComponent/PrivacyPolicy";
import Auth from "../components/Auth/Auth";


const Routes = [
  {
    path: '/',
    component: HomeComponent,
    id: 1
  },
  {
    path: '/:route/:id',
    component: ExecuteCase,
    id: 2
  },
  {
    path: '/privacy_policy',
    component: PrivacyPolicy,
    id: 3
  },
  {
    path: '/auth',
    component: Auth,
    id: 4
  }
];

export default Routes;