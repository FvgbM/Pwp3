import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroComponent } from './livro/livro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LeitorComponent } from './leitor/leitor.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent, LivroComponent, CatalogoComponent,LeitorComponent, CadastroComponent
  ],

  imports: [
    BrowserModule,    AppRoutingModule,  FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
