package sv.edu.unab.gestionresiduos.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sv.edu.unab.gestionresiduos.models.RecyclablePoint;
import sv.edu.unab.gestionresiduos.repositories.RecyclablePointRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class RecyclablePointService {

    private RecyclablePointRepository recyclablePointRepository;

    public RecyclablePoint save(RecyclablePoint recyclablePoint) {
        return recyclablePointRepository.save(recyclablePoint);
    }

    public RecyclablePoint findById(Long id) {
        return recyclablePointRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        recyclablePointRepository.deleteById(id);
    }

    public List<RecyclablePoint> findAll() {
        return recyclablePointRepository.findAll();
    }


}
