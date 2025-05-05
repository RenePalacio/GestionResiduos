package sv.edu.unab.gestionresiduos.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "recyclable_points")
@EqualsAndHashCode(callSuper = true)
public class RecyclablePoint extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recyclable_point_id", nullable = false)
    private Long id;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "phone", length = 20, nullable = false)
    private String phone;

    @Column(name = "location", length = 200, nullable = false)
    private String location;

    @Column(name = "latitud", length = 20)
    private String latitud;

    @Column(name = "longitud", length = 20)
    private String longitud;

    @Column(name = "operating_hours", length = 100)
    private String operating_hours;

    @Column(name = "image_url", length = 255)
    private String imageUrl;

    @Column(name = "description", length = 500)
    private String description;

    @ManyToMany
    @JoinTable(
        name = "point_accepted_materials",
        joinColumns = @JoinColumn(name = "recyclable_point_id"),
        inverseJoinColumns = @JoinColumn(name = "recyclable_id")
    )
    private Set<Recyclable> acceptedMaterials;
}
