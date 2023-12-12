import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leitor } from '../leitor/leitor.model';

@Injectable({
  providedIn: 'root'
})
export class LeitorService {
  constructor(private http : HttpClient) {}

  public gravar(obj : Leitor){          
    this.http.post<String>("http://localhost:8081/api/leitor", obj)
    .subscribe();        
  }
  
  public alterar(obj : Leitor){          
    this.http.put<String>("http://localhost:8081/api/leitor", obj)
    .subscribe();        
  }

  public carregar(codigo: number): Observable<Leitor>{
    return this.http.get<Leitor>("http://localhost:8081/api/leitor/"+codigo);         
  }

  public remover(codigo: number) {
    return this.http.delete<String>("http://localhost:8081/api/leitor/"+codigo).subscribe();    
  }

  public listar(): Observable<Leitor[]>{
    return this.http.get<Leitor[]>("http://localhost:8081/api/leitor/lista");         
  }

}
