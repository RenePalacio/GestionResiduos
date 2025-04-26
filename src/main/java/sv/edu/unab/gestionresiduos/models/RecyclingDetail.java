package sv.edu.unab.gestionresiduos.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "recycling_details")
@EqualsAndHashCode(callSuper = true)
public class RecyclingDetail extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recycling_detail_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "recycling_id", nullable = false)
    @JsonBackReference
    private Recycling recycling;

    @ManyToOne
    @JoinColumn(name = "recyclable_id", nullable = false)
    private Recyclable recyclable;

    @Column(name = "quantity", nullable = false)
    private Double quantity;
}
