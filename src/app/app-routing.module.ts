import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContrateComponent } from './contrate/contrate.component';
import { AppComponent } from './app.component';

const routes: Routes = [  
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'contrate-me', component: ContrateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
