import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {

  ngOnInit(): void {
    document.getElementById("botaoCadastrar")!.addEventListener("click", this.validarFormulario);
  }

  public validarFormulario() {
      var nome: any = (document.getElementById("nome") as any).value;
      var email: any = (document.getElementById("email") as any).value;
      var senha: any = (document.getElementById("senha") as any).value;
      var documento: any = (document.getElementById("documento") as any).value;
      var senhaConfirmacao: any = (document.getElementById("senhaConfirmacao") as any).value;

      console.log(senha);
      console.log(senhaConfirmacao);

      if(nome === ""){
          alert("Digite seu nome.");
          return false;
      } else if (email === ""){
          alert("Digite seu email");
          return false;
      } else if (senha === ""){
          alert("Digite sua senha");
          return false;
      }else if (senha !== senhaConfirmacao){
          alert("Digite as senhas iguais!!! .");
          return false;
      }

      alert("Tudo certo");
      return true;
  }
}
