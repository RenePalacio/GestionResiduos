package sv.edu.unab.gestionresiduos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;
import sv.edu.unab.gestionresiduos.models.RecyclablePoint;

@RestController
public interface RecyclablePointRepository extends JpaRepository<RecyclablePoint, Long> {
}
