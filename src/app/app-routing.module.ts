import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContrateComponent } from './contrate/contrate.component';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'contrate', component: ContrateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
