package sv.edu.unab.gestionresiduos.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sv.edu.unab.gestionresiduos.models.Recyclable;
import sv.edu.unab.gestionresiduos.services.RecyclableService;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/recyclables")
@Tag(name = "Reciclables", description = "Endpoint para articulos reciclables")
public class RecyclableController {

    private final RecyclableService recyclableService;

     @GetMapping
     @Operation(summary = "Listar articulos reciclables")
     public ResponseEntity<List<Recyclable>> getAllRecyclables() {
         List<Recyclable> recyclables = recyclableService.findAll();
         return ResponseEntity.ok(recyclables);
     }

     @GetMapping("/{id}")
        @Operation(summary = "Obtener articulo reciclable por ID")
     public ResponseEntity<Recyclable> getRecyclableById(@PathVariable Long id) {
         Optional<Recyclable> recyclable = recyclableService.getById(id);
         return recyclable.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
     }

     @PostMapping
        @Operation(summary = "Crear nuevo articulo reciclable")
     public ResponseEntity<Recyclable> createRecyclable(@RequestBody Recyclable recyclable) {
         Recyclable createdRecyclable = recyclableService.save(recyclable);
         return ResponseEntity.status(HttpStatus.CREATED).body(createdRecyclable);
     }

     @PutMapping("/{id}")
        @Operation(summary = "Actualizar articulo reciclable")
     public ResponseEntity<Recyclable> updateRecyclable(@PathVariable Long id, @RequestBody Recyclable recyclable) {
         recyclable.setId(id);
         Recyclable updatedRecyclable = recyclableService.save(recyclable);
         return ResponseEntity.ok(updatedRecyclable);
     }

     @DeleteMapping("/{id}")
        @Operation(summary = "Eliminar articulo reciclable")
     public ResponseEntity<Void> deleteRecyclable(@PathVariable Long id) {
         recyclableService.delete(id);
         return ResponseEntity.noContent().build();
     }

}
