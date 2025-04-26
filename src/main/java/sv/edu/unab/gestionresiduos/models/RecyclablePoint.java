package sv.edu.unab.gestionresiduos.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "recyclable_points")
public class RecyclablePoint {

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

}
