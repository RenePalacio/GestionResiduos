package sv.edu.unab.gestionresiduos.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sv.edu.unab.gestionresiduos.dto.RecyclingDto;
import sv.edu.unab.gestionresiduos.dto.RecyclingRequestDto;
import sv.edu.unab.gestionresiduos.models.Recycling;
import sv.edu.unab.gestionresiduos.services.RecyclingService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


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

    @GetMapping("/{id}")
    @Operation(summary = "Obtener reciclaje por ID")
    public ResponseEntity<Recycling> getRecyclingById(@PathVariable Long id) {
        Optional<Recycling> recycling = recyclingService.getRecyclingById(id);

        if (recycling.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(recycling.get());
    }

    @GetMapping
    @Operation(summary = "Listar todos los reciclajes")
    public ResponseEntity<?> getAllRecyclings() {

        List<RecyclingDto> recyclings = recyclingService.getAllRecyclings().stream()
                .map(reclyng -> recyclingService.convertToDto(reclyng))
                .toList();
        return ResponseEntity.ok(recyclings);
    }
    
}
