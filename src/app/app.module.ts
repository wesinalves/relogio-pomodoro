import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelogioComponent } from './relogio/relogio.component';
import { PaginaDuvidasComponent } from './pagina-duvidas/pagina-duvidas.component';
import { ConfiguraticoesComponent } from './configuraticoes/configuraticoes.component';

@NgModule({
  declarations: [
    AppComponent,
    RelogioComponent,
    PaginaDuvidasComponent,
    ConfiguraticoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
