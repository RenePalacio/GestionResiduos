package sv.edu.unab.gestionresiduos.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import sv.edu.unab.gestionresiduos.dto.AuthRequestDto;
import sv.edu.unab.gestionresiduos.dto.AuthResponseDto;
import sv.edu.unab.gestionresiduos.dto.RegisterRequestDto;
import sv.edu.unab.gestionresiduos.models.User;
import sv.edu.unab.gestionresiduos.services.UserService;
import sv.edu.unab.gestionresiduos.utils.JwtUtils;

import java.util.HashMap;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/auth")
@Tag(name = "Autenticación", description = "Endpoints para login y registro de usuarios")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private JwtUtils jwtUtils;
    private UserService userService;

    @PostMapping("/login")
    @Operation(summary = "Iniciar sesión", description = "Autentica un usuario y devuelve un JWT junto con la información del usuario")
    public ResponseEntity<?> login(@RequestBody AuthRequestDto request) {

        try {

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String token = jwtUtils.generateToken(userDetails.getUsername());

            User user = userService.findByEmail(userDetails.getUsername())
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));

            AuthResponseDto response = AuthResponseDto.builder()
                    .id(user.getId())
                    .token(token)
                    .name(user.getName())
                    .email(user.getEmail())
                    .role(user.getRole())
                    .build();

            return ResponseEntity.ok(response);

        } catch (BadCredentialsException ex) {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("status", "unauthorized");
            errorResponse.put("code", "401");
            errorResponse.put("message", "Credenciales inválidas.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(errorResponse);
        }
    }


    @PostMapping("/register")
    @Operation(summary = "Registrar nuevo usuario", description = "Permite crear un nuevo usuario en el sistema")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDto request) {
        if (userService.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "El correo ya está registrado."));
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .password(request.getPassword())
                .role("user")
                .build();

        userService.save(user);

        return ResponseEntity.status(201).body(Map.of("message", "Usuario registrado exitosamente."));
    }

    @GetMapping("/me")
    @Operation(summary = "Obtener información del usuario autenticado", description = "Devuelve la información del usuario autenticado")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User user = userService.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        AuthResponseDto response = AuthResponseDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRole())
                .createdAt(user.getCreatedAt())
                .build();

        return ResponseEntity.ok(response);

    }


}
