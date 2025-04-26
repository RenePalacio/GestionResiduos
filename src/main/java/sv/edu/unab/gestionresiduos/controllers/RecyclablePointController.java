package sv.edu.unab.gestionresiduos.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sv.edu.unab.gestionresiduos.models.RecyclablePoint;
import sv.edu.unab.gestionresiduos.services.RecyclablePointService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/recyclable-points")
@Tag(name = "Puntos de Reciclaje", description = "Endpoints para gestionar puntos de reciclaje")
public class RecyclablePointController {

    private final RecyclablePointService recyclablePointService;

     @GetMapping
     @Operation(summary = "Obtener todos los puntos de reciclaje", description = "Devuelve una lista de todos los puntos de reciclaje")
     public ResponseEntity<List<RecyclablePoint>> getAllRecyclablePoints() {
         return ResponseEntity.ok(recyclablePointService.findAll());
     }

     @PostMapping
     @Operation(summary = "Crear un nuevo punto de reciclaje", description = "Permite crear un nuevo punto de reciclaje")
     public ResponseEntity<RecyclablePoint> createRecyclablePoint(@RequestBody RecyclablePoint recyclablePoint) {
         RecyclablePoint newRecyclablePoint = recyclablePointService.save(recyclablePoint);
         return ResponseEntity.status(201).body(newRecyclablePoint);
     }

     @GetMapping("/{id}")
     @Operation(summary = "Obtener un punto de reciclaje por ID", description = "Devuelve un punto de reciclaje específico por su ID")
     public ResponseEntity<RecyclablePoint> getRecyclablePointById(@PathVariable Long id) {
         RecyclablePoint recyclablePoint = recyclablePointService.findById(id);
            if (recyclablePoint != null) {
                return ResponseEntity.ok(recyclablePoint);
            } else {
                return ResponseEntity.notFound().build();
            }
     }

     @DeleteMapping("/{id}")
     @Operation(summary = "Eliminar un punto de reciclaje por ID", description = "Permite eliminar un punto de reciclaje específico por su ID")
     public void deleteRecyclablePoint(@PathVariable Long id) {
         recyclablePointService.deleteById(id);
     }

     @PutMapping("/{id}")
     @Operation(summary = "Actualizar un punto de reciclaje por ID", description = "Permite actualizar un punto de reciclaje específico por su ID")
     public ResponseEntity<RecyclablePoint> updateRecyclablePoint(@PathVariable Long id, @RequestBody RecyclablePoint recyclablePoint) {
         RecyclablePoint existingRecyclablePoint = recyclablePointService.findById(id);
            if (existingRecyclablePoint != null) {
                recyclablePoint.setId(id);
                return ResponseEntity.ok(recyclablePointService.save(recyclablePoint));

            }else{
                return ResponseEntity.notFound().build();
            }
     }

}
