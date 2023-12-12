package backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LeitorRepository
        extends JpaRepository<LeitorEntity, Integer>,
        JpaSpecificationExecutor<LeitorEntity> {

}