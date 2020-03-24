import { ConfigurationsService } from './configurations.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelogioComponent } from './relogio/relogio.component';
import { PaginaDuvidasComponent } from './pagina-duvidas/pagina-duvidas.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    RelogioComponent,
    PaginaDuvidasComponent,
    ConfiguracoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ConfigurationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
