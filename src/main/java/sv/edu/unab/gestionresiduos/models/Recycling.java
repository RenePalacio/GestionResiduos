package sv.edu.unab.gestionresiduos.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "recyclings")
@EqualsAndHashCode(callSuper = true)
public class Recycling extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recycling_id", nullable = false)
    private Long id;

    @Column(name = "description", length = 255, nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "recyclable_point_id")
    private RecyclablePoint recyclablePoint;

    @OneToMany(mappedBy = "recycling", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RecyclingDetail> details = new ArrayList<>();

}
