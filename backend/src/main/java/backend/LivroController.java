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
public class LivroController {
    @PostMapping("/api/livro")
    public ResponseEntity<String>
    inserir(@RequestBody LivroEntity obj){
        String mensagem = "livro cadastrado com sucesso";
        return ResponseEntity.ok(mensagem);
    }
    @PutMapping("/api/livro")
    public ResponseEntity<String>
    alterar(@RequestBody LivroEntity obj){
        String mensagem = "livro atualizado";
        return ResponseEntity.ok(mensagem);
    }
    @GetMapping("/api/livro/{codigo}")
    public ResponseEntity<LivroEntity>
    carregar(@PathVariable int codigo){
       LivroEntity obj = new LivroEntity();
        return ResponseEntity.ok(obj);
    }
    @GetMapping("/api/livro/lista")
    public ResponseEntity<List<LivroEntity>>
    lista(){
        List<LivroEntity> lista = new ArrayList<LivroEntity>();
        return ResponseEntity.ok(lista);
    }
    @DeleteMapping("/api/livro/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        String mensagem = "livro removido!";
        return ResponseEntity.ok(mensagem);
    }
}
