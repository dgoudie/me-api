FROM openjdk:8-jre-alpine
ADD target/me-api.jar /me-api.jar
EXPOSE 80
CMD ["java", "-jar", "me-api.jar", "--spring.profiles.active=prod"]