import { RelogioComponent } from './relogio/relogio.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { PaginaDuvidasComponent } from './pagina-duvidas/pagina-duvidas.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', component: RelogioComponent, pathMatch: 'full' },
    {path: 'duvidas', component: PaginaDuvidasComponent},
    {path: 'config', component: ConfiguracoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
