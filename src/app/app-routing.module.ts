import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { TreeServicesComponent } from './pages/tree-services/tree-services.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'instrucoes', component: InstructionsComponent},
  {path: 'servicos', component: TreeServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
