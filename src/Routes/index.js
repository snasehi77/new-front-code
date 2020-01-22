import HomeComponent from "../Components/HomeComponent/HomeComponent";
//import ExecuteCaseComponent from "../Components/ExecuteCaseComponent/ExecuteCaseComponent";
import PrivacyPolicyComponent from "../Components/PrivacyPolicyComponent/PrivacyPolicyComponent";
import AuthComponent from "../Components/AuthComponent/AuthComponent";
import ExecuteFlowCasesComponent from "../Components/ExecuteCaseComponent/ExecuteFlowCasesComponent";


const Routes = [
  {
    path: '/',
    component: HomeComponent,
    id: 1
  },
  {
    path: '/:route/:id',
    component: ExecuteFlowCasesComponent,
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
