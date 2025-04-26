package sv.edu.unab.gestionresiduos.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "recyclables")
@EqualsAndHashCode(callSuper = true)
public class Recyclable extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recyclable_id", nullable = false)
    private Long id;

    @Column(name = "name", length = 255, nullable = false)
    private String name;

    @Column(name = "category", length = 255, nullable = true)
    private String category;

    @Column(name = "description", length = 255, nullable = true)
    private String description;

    @Column(name = "recomendation", length = 255, nullable = true)
    private String recomendation;

}
