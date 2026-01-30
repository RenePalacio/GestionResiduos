# Gestión de Residuos

Aplicación web para la **gestión y reciclaje de residuos**, desarrollada como proyecto académico, orientada a la administración de centros de acopio, usuarios y materiales reciclables.

El sistema cuenta con **backend en Java con Spring Boot**, **API REST**, autenticación de usuarios, panel administrativo y frontend web.

---

## Funcionalidades principales

- Registro y autenticación de usuarios  
- Gestión de usuarios con roles (usuario / administrador)  
- Administración de materiales reciclables  
- Registro y control de entregas de residuos  
- Panel administrativo para la gestión del sistema  
- Consumo de servicios REST desde el frontend
  
---

## Tecnologías utilizadas

### Backend
- Java  
- Spring Boot  
- Spring Data JPA  
- Spring Security  
- API REST  
- Maven  

### Base de datos
- H2 Database (entorno de desarrollo)
- MySQL (entorno productivo)

### Frontend
- React  

### DevOps / Infraestructura
- Docker  
- Dockerfile para despliegue  
- AWS  

### Otras herramientas
- Lombok  
- Git & GitHub  

---

## Arquitectura

El proyecto sigue una **arquitectura cliente-servidor**:

- El backend expone **APIs REST** desarrolladas con Spring Boot.  
- El frontend consume dichas APIs para mostrar la información a usuarios y administradores.  
- La persistencia de datos se maneja mediante JPA y bases de datos relacionales.

---

## Ejecución del proyecto

### Requisitos
- Java 17 o superior  
- Maven  
- MySQL (opcional, si no se utiliza H2)  
- Docker (opcional)

### Ejecución local
```bash
mvn clean install
mvn spring-boot:run
