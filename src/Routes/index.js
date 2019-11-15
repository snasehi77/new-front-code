import HomeComponent from "../Components/HomeComponent/HomeComponent";
import AccidentsInjuries from "../Components/CasesComponent/AccidentsInjuries";
import HealthMedicalIssues from "../Components/CasesComponent/HealthMedicalIssues";
import LaborWorkPlaceIssues from "../Components/CasesComponent/LaborWorkPlaceIssues";
import SexualHarassment from "../Components/CasesComponent/SexualHarassment";
import SexualAbuse from "../Components/CasesComponent/SexualAbuse";
import ElderAbuse from "../Components/CasesComponent/ElderAbuse";

const Routes = [
  {
    path: '/',
    component: HomeComponent,
    id: 1
  },
  {
    path: '/accidents_and_injuries',
    component: AccidentsInjuries,
    id: 2
  },
  {
    path: '/health_and_medical_issues',
    component: HealthMedicalIssues,
    id: 4
  },
  {
    path: '/labor_work_place_issues',
    component: LaborWorkPlaceIssues,
    id: 5
  }
  ,
  {
    path: '/sexual_harassment',
    component: SexualHarassment,
    id: 6
  }
  ,
  {
    path: '/sexual_abuse',
    component: SexualAbuse,
    id: 7
  }
  ,
  {
    path: '/elder_abuse',
    component: ElderAbuse,
    id: 8
  }
];

export default Routes;