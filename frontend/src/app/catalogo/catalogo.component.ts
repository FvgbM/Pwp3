import { Component } from '@angular/core';
import { Catalogo } from './catalogo.component';
import { CatalogoService } from '../service/catalogoService';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  lista :  Catalogo[] = [];
  mensagem : String = "";
  constructor(private catalogoService : Catalogo){}

  ngOnInit(){
    this.listar();
  }
  public listar(){
    try{
      this.catalogoService.listar().subscribe(
        (retorno: Catalogo[]) => {            
          this.lista = retorno;
          this.mensagem = "";
        });
    } catch {
      this.mensagem = "não foi encontrado nenhum registro !";
    }
  }

}
export { Catalogo };

