import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { TreeServicesComponent } from './pages/tree-services/tree-services.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'instrucoes', component: InstructionsComponent},
  {path: 'servicos', component: TreeServicesComponent},
  {path: 'ciclo-de-vida', component: LifeCycleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
