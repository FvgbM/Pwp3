import { Component } from '@angular/core';
import { Leitor } from './leitor.component.spec';
import { LeitorService } from '../service/leitor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html',
  styleUrls: ['./leitor.component.css']
})
export class LeitorComponent {
  mensagem : string = "";
  obj: Leitor = new Leitor();
  lista: Leitor[] = [];
  
  constructor(private leitorService: LeitorComponent, 
              private rotas: ActivatedRoute) {}

  ngOnInit(){
    let codigo = this.rotas.snapshot.paramMap.get("codigo");
    if(codigo!=null){
      this.obj.codigo = Number(codigo);
      this.pesquisar();
    }     
  }              

  public mostrar(){
    this.mensagem = "Registro gravado com sucesso!";
    let leitorAux : Leitor = new Leitor(this.obj);    
    this.lista.push(leitorAux);
    window.localStorage.setItem('listaLeitor', JSON.stringify(this.lista));
  }

  public gravar(){
    try{
      if(this.obj.codigo==0){
        this.leitorService.gravar(this.obj);
        this.mensagem = "Leitor gravado com sucesso!";
      }  else {
        this.leitorService.alterar(this.obj);
        this.mensagem = "Leitor alterado com sucesso!";
      }      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }
  alterar(obj: Leitor) {
    throw new Error('Method not implemented.');
  }

  public pesquisar(){
    this.mensagem = "";        
    try{      
      this.leitorService.carregar(this.obj.codigo).subscribe(
        (retorno: Leitor) => {            
          this.obj.email = retorno.email;
          this.obj.nome = retorno.nome;
          this.obj.senha = retorno.senha;
          this.obj.telefone = retorno.telefone;
          this.obj.documento = retorno.documento;
          if(retorno.nome==null)  this.mensagem = "Registro não encontrado!";          
        });
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }
  carregar(codigo: any) {
    throw new Error('Method not implemented.');
  }

  public remover(){
    try{
      this.leitorService.remover(this.obj.codigo);
      this.mensagem = "registro removido com sucesso!";
    } 
    catch{
      this.mensagem = "Ocorreu um erro durante o processo!";
    }     
  }
}
