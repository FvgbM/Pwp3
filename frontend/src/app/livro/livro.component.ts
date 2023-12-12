import { ActivatedRoute } from "@angular/router";
import { LivroService } from "../livro.service";

export class LivroComponent {
  mensagem : string = "";
  obj: Livro = new Livro();
  lista: Livro[] = [];
  
  constructor(private livroService: LivroService, 
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
    let livroAux : Livro = new Livro(this.obj);    
    this.lista.push(livroAux);
    window.localStorage.setItem('listaLivro', JSON.stringify(this.lista));
  }

  public gravar(){
    try{
      if(this.obj.codigo==0){
        this.livroService.gravar(this.obj);
        this.mensagem = "Livro gravado com sucesso!";
      }  else {
        this.livroService.alterar(this.obj);
        this.mensagem = "Livro alterado com sucesso!";
      }      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public pesquisar(){
    this.mensagem = "";
    try{      
      this.livroService.carregar(this.obj.codigo).subscribe(
        (retorno: Livro) => {       
          this.obj.titulo = retorno.titulo;
          this.obj.autor = retorno.autor;
          this.obj.descritivo = retorno.descritivo;
          this.obj.ano = retorno.ano;
          this.obj.paginas = retorno.paginas;
          if(retorno.nome==null)  this.mensagem = "Registro não encontrado!";          
        });
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public remover(){
    try{
      this.livroService.remover(this.obj.codigo);
      this.mensagem = "registro removido com sucesso!";
    } 
    catch{
      this.mensagem = "Ocorreu um erro durante o processo!";
    }     
  }
}
