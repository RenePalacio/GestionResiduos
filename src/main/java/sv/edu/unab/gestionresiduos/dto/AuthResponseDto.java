package sv.edu.unab.gestionresiduos.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponseDto {
    private Long id;
    private String token;
    private String name;
    private String email;
    private String role;
}
