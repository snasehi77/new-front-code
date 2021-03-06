import HomeComponent from "../Components/HomeComponent/HomeComponent";
//import ExecuteCaseComponent from "../Components/ExecuteCaseComponent/ExecuteCaseComponent";
import PrivacyPolicyComponent from "../Components/PrivacyPolicyComponent/PrivacyPolicyComponent";
import AuthComponent from "../Components/AuthComponent/AuthComponent";
import ExecuteFlowCasesComponent from "../Components/ExecuteCaseComponent/ExecuteFlowCasesComponent";
import MemberTermsComponent from "../Components/MemberTermsComponent/MemberTermsComponent";
import ComingSoonComponent from "../Components/ComingSoonComponent/ComingSoonComponent";
import PlaceholderComponent from "../Components/PlaceholderComponent/PlaceholderComponent";


const Routes = [
  {
    path: '/',
    component: HomeComponent,
    id: 1
  },
  {
    path: '/execute_flow/:id',
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
    id: 5
  },
  {
    path: '/yourcase-lawyer-login',
    component: ComingSoonComponent,
    id: 6
  },
  {
    path: '/become-a-yourcase-lawyer',
    component: ComingSoonComponent,
    id: 7
  },
  {
    path: '/affiliate-program',
    component: ComingSoonComponent,
    id: 8
  },
  {
    path: '/personal-injury',
    component: PlaceholderComponent,
    id: 9
  },
  {
    path: '/health_and_medical',
    component: PlaceholderComponent,
    id: 10
  },
  {
    path: '/harassment-sexual-abuse/',
    component: PlaceholderComponent,
    id: 11
  },
  {
    path: '/elder-abuse',
    component: PlaceholderComponent,
    id: 12
  },
  {
    path: '/workplace-injuries',
    component: PlaceholderComponent,
    id: 13
  },
  {
    path: '/employment-isues/',
    component: PlaceholderComponent,
    id: 14
  }
];

export default Routes;
