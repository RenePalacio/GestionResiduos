package sv.edu.unab.gestionresiduos.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sv.edu.unab.gestionresiduos.dto.RecyclingRequestDto;
import sv.edu.unab.gestionresiduos.models.Recycling;
import sv.edu.unab.gestionresiduos.services.RecyclingService;

@RestController
@AllArgsConstructor
@RequestMapping("/api/recycling")
@Tag(name = "Reciclaje", description = "Endpoints para reciclaje")
public class RecyclingController {

    private final RecyclingService recyclingService;

    @PostMapping
    @Operation(summary = "Crear nuevo reciclaje")
    public ResponseEntity<?> createRecycling(@RequestBody RecyclingRequestDto recyclingRequestDto) {
        Recycling savedRecycling = recyclingService.createRecyclingWithDetails(recyclingRequestDto);
        return ResponseEntity.status(201).body(savedRecycling);
    }
}
