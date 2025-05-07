package sv.edu.unab.gestionresiduos.dto;

import lombok.Data;

@Data
public class RecyclingDetailDto {

    private Long id;
    private RecyclableDto recyclable;
    private Double quantity;


}
