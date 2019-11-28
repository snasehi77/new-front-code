import HomeComponent from "../components/HomeComponent/HomeComponent";
import ExecuteCase from "../components/CasesComponent/ExecuteCase";


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