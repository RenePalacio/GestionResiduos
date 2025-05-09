# Usa una imagen base de Alpine con OpenJDK 21
FROM eclipse-temurin:21-jdk-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo jar al contenedor
COPY target/gestion-residuos-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto que tu aplicación use (ajusta si no es 8080)
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
