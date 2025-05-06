package sv.edu.unab.gestionresiduos.dto;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponseDto {
    private Long id;
    private String token;
    private String name;
    private String email;
    private String phone;
    private String role;
    private LocalDateTime createdAt;
}
