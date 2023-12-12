import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../app/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  constructor(private http : HttpClient) {}

  public gravar(obj : Livro){          
    this.http.post<String>("http://localhost:8081/api/livro", obj)
    .subscribe();        
  }
  
  public alterar(obj : Livro){          
    this.http.put<String>("http://localhost:8081/api/livro", obj)
    .subscribe();        
  }

  public carregar(codigo: number): Observable<Livro>{
    return this.http.get<Livro>("http://localhost:8081/api/livro/"+codigo);         
  }

  public remover(codigo: number) {
    return this.http.delete<String>("http://localhost:8081/api/livro/"+codigo).subscribe();    
  }

  public listar(): Observable<Livro[]>{
    return this.http.get<Livro[]>("http://localhost:8081/api/livro/lista");         
  }

}
