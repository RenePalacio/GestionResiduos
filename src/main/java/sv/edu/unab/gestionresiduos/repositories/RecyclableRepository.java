package sv.edu.unab.gestionresiduos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sv.edu.unab.gestionresiduos.models.Recyclable;

@Repository
public interface RecyclableRepository extends JpaRepository<Recyclable, Long> {
}
