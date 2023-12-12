import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './livro/livro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LeitorComponent } from './leitor/leitor.component';

const routes: Routes = [
  {path:"livro", component:LivroComponent},
  {path:"livro/:codigo", component:LivroComponent},
  {path:"", component:CatalogoComponent},
  {path:"catalogo", component:CatalogoComponent},
  {path:"leitor", component:LeitorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
