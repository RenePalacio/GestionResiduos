package sv.edu.unab.gestionresiduos.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "recycling_details")
public class RecyclingDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recycling_detail_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "recycling_id", nullable = false)
    private Recycling recycling;

    @ManyToOne
    @JoinColumn(name = "recyclable_id", nullable = false)
    private Recyclable recyclable;

    @Column(name = "quantity", nullable = false)
    private Double quantity;
}
