import HomeComponent from "../Components/HomeComponent/HomeComponent";
//import ExecuteCaseComponent from "../Components/ExecuteCaseComponent/ExecuteCaseComponent";
import PrivacyPolicyComponent from "../Components/PrivacyPolicyComponent/PrivacyPolicyComponent";
import AuthComponent from "../Components/AuthComponent/AuthComponent";
import ExecuteFlowCasesComponent from "../Components/ExecuteCaseComponent/ExecuteFlowCasesComponent";
import MemberTermsComponent from "../Components/MemberTermsComponent/MemberTermsComponent";


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
  },
  {
    path: '/member-terms-of-service',
    component: MemberTermsComponent,
    id: 3
  },
];

export default Routes;
