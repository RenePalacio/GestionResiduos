package sv.edu.unab.gestionresiduos.dto;

import lombok.Data;

@Data
public class RecyclablePointDto {
    private Long id;
    private String name;
    private String phone;
    private String location;
    private String latitud;
    private String longitud;
    private String operating_hours;
    private String imageUrl;
    private String description;
}
