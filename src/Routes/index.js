import HomeComponent from "../Components/HomeComponent/HomeComponent";
import ExecuteCase from "../Components/CasesComponent/ExecuteCase";


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
  }
];

export default Routes;