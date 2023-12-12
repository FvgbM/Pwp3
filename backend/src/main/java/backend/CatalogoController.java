package backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class CatalogoController {
    @PostMapping("/api/catalogo")
    public ResponseEntity<String>
    inserir(@RequestBody CatalogoEntity obj){
        String mensagem = "Livro cadastrado no catalogo com sucesso";
        return ResponseEntity.ok(mensagem);
    }
    @PutMapping("/api/catalogo")
    public ResponseEntity<String>
    alterar(@RequestBody CatalogoEntity obj){
        String mensagem = "O livro foi atualizado no catalogo";
        return ResponseEntity.ok(mensagem);
    }
    @GetMapping("/api/catalogo/{codigo}")
    public ResponseEntity<CatalogoEntity>
    carregar(@PathVariable int codigo){
        CatalogoEntity obj = new CatalogoEntity();
        return ResponseEntity.ok(obj);
    }
    @GetMapping("/api/catalogo/lista")
    public ResponseEntity<List<CatalogoEntity>>
    lista(){
        List<CatalogoEntity> lista = new ArrayList<CatalogoEntity>();
        return ResponseEntity.ok(lista);
    }
    @DeleteMapping("/api/catalogo/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        String mensagem = "Livro removido do catalogo!";
        return ResponseEntity.ok(mensagem);
    }
}
