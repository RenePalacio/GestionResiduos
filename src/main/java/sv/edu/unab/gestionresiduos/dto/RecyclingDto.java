package sv.edu.unab.gestionresiduos.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class RecyclingDto {
    private Long id;
    private String description;
    private UserDto user;
    private RecyclablePointDto recyclablePoint;
    private LocalDateTime createdAt;
    private List<RecyclingDetailDto> details;
    
}
