package sv.edu.unab.gestionresiduos.dto;

import lombok.Data;

@Data
public class RecyclingDetailRequestDto {
    private Long recyclableId;
    private Double quantity;
}
