package backend;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

public class LeitorController {
    @Autowired
    LeitorRepository repository;

    @PostMapping("/api/leitor")
    public ResponseEntity<String>
    inserir(@RequestBody LeitorEntity obj){
        repository.save(obj);
        String mensagem = "cadastro de leitor efetuado com sucesso";
        return ResponseEntity.ok(mensagem);
    }
    @PutMapping("/api/leitor")
    public ResponseEntity<String>
    alterar(@RequestBody LeitorEntity obj){
        repository.save(obj);
        String mensagem = "cadastro de leitor foi atualizado";
        return ResponseEntity.ok(mensagem);
    }
    @GetMapping("/api/leitor/{codigo}")
    public ResponseEntity<LeitorEntity>
    carregar(@PathVariable int codigo){
        Optional<LeitorEntity> obj = repository.findById(codigo);
        if(obj.isPresent())
            return ResponseEntity.ok(obj.get());
        else
            return ResponseEntity.ok(new LeitorEntity());
    }

    @GetMapping("/api/leitor/lista")
    public ResponseEntity<List<LeitorEntity>>
    lista(){
        List<LeitorEntity> lista = repository.findAll();
        return ResponseEntity.ok(lista);
    }
    @DeleteMapping("/api/leitor/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        repository.deleteById(codigo);
        String mensagem = "leitor removido !";
        return ResponseEntity.ok(mensagem);
    }

}
