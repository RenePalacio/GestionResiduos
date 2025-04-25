package sv.edu.unab.gestionresiduos.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sv.edu.unab.gestionresiduos.models.Recyclable;
import sv.edu.unab.gestionresiduos.repositories.RecyclableRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RecyclableService {
    private final RecyclableRepository repo;

    public List<Recyclable> findAll() {
        return repo.findAll();
    }

    public Optional<Recyclable> getById(Long id) {
        return repo.findById(id);
    }

    public Recyclable save(Recyclable recyclable) {
        return repo.save(recyclable);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
