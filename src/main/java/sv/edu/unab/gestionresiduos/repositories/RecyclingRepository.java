package sv.edu.unab.gestionresiduos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sv.edu.unab.gestionresiduos.models.Recycling;

import java.util.List;


@Repository
public interface RecyclingRepository extends JpaRepository<Recycling, Long> {

     List<Recycling> findByUserId(Long userId);
}
