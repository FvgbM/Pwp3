package backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LivroRepository
        extends JpaRepository<LivroEntity, Integer>,
        JpaSpecificationExecutor<LivroEntity> {

}