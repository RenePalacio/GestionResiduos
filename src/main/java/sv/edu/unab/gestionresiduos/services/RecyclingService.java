package sv.edu.unab.gestionresiduos.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import sv.edu.unab.gestionresiduos.dto.RecyclingDetailRequestDto;
import sv.edu.unab.gestionresiduos.dto.RecyclingRequestDto;
import sv.edu.unab.gestionresiduos.models.*;
import sv.edu.unab.gestionresiduos.repositories.RecyclablePointRepository;
import sv.edu.unab.gestionresiduos.repositories.RecyclableRepository;
import sv.edu.unab.gestionresiduos.repositories.RecyclingRepository;
import sv.edu.unab.gestionresiduos.repositories.UserRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RecyclingService {
    private final RecyclingRepository recyclingRepository;
    private final UserRepository userRepository;
    private final RecyclablePointRepository recyclablePointRepository;
    private final RecyclableRepository recyclableRepository;


     public List<Recycling> getAllRecyclings() {
         return recyclingRepository.findAll();
     }

     public Optional<Recycling> getRecyclingById(Long id) {
         return recyclingRepository.findById(id);
     }

     public Recycling createRecycling(Recycling recycling) {
         return recyclingRepository.save(recycling);
     }

     public void deleteRecycling(Long id) {
         recyclingRepository.deleteById(id);
     }

     public List<Recycling> findRecyclingsByUserId(Long userId) {
         return recyclingRepository.findByUserId(userId);
     }

    @Transactional
    public Recycling createRecyclingWithDetails(RecyclingRequestDto request) {
        Recycling recycling = new Recycling();
        recycling.setDescription(request.getDescription());
        recycling.setRecyclingDate(LocalDateTime.now());

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        RecyclablePoint point = recyclablePointRepository.findById(request.getRecyclablePointId())
                .orElseThrow(() -> new RuntimeException("Recyclable point not found"));

        recycling.setUser(user);
        recycling.setRecyclablePoint(point);

        for (RecyclingDetailRequestDto detailRequest : request.getDetails()) {
            Recyclable recyclable = recyclableRepository.findById(detailRequest.getRecyclableId())
                    .orElseThrow(() -> new RuntimeException("Recyclable not found"));

            RecyclingDetail detail = new RecyclingDetail();
            detail.setRecycling(recycling);
            detail.setRecyclable(recyclable);
            detail.setQuantity(detailRequest.getQuantity());

            recycling.getDetails().add(detail);
        }

        return recyclingRepository.save(recycling);
    }
}
