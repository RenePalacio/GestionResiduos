package sv.edu.unab.gestionresiduos.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class RecyclingRequestDto {
    private String description;
    private Long userId;
    private Long recyclablePointId;
    private List<RecyclingDetailRequestDto> details;
}
