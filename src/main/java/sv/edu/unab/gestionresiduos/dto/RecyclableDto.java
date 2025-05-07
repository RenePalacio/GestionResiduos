package sv.edu.unab.gestionresiduos.dto;

import lombok.Data;

@Data
public class RecyclableDto {
    private Long id;
    private String name;
    private String description;
    private String category;
    private String unitOfMeasure;
    private Double pricePerUnit;
    
}
