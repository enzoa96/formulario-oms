import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TableComponent } from './components/table/table.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [AppComponent, FormularioComponent, TableComponent],
  imports: [BrowserModule, HttpClientModule, TabsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
