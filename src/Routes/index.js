import HomeComponent from "../components/HomeComponent/HomeComponent";
import ExecuteCase from "../components/ExecuteCaseComponent/ExecuteCase";
import PrivacyPolicy from "../components/PrivacyPolicyComponent/PrivacyPolicy";


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
  }
];

export default Routes;