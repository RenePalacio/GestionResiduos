CREATE TABLE point_accepted_materials (
    recyclable_point_id BIGINT NOT NULL,
    recyclable_id BIGINT NOT NULL,
    PRIMARY KEY (recyclable_point_id, recyclable_id),
    FOREIGN KEY (recyclable_point_id) REFERENCES recyclable_points(recyclable_point_id),
    FOREIGN KEY (recyclable_id) REFERENCES recyclables(recyclable_id)
); 
-- Insertar materiales aceptados para cada punto de reciclaje de prueba 
