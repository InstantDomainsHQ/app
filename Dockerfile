FROM amazoncorretto:20.0.2-alpine3.18
EXPOSE 9090
COPY backend backend
WORKDIR backend
CMD ["./gradlew", ":api:build", "-DSPRING_APPLICATION_NAME=InstantDomains", "-DSPRING_PROFILES_ACTIVE=test",  "-DGH_TOKEN=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", "-DGH_USERNAME=fhubz", "--info"]