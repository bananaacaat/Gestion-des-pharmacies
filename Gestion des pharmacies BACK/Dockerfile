# Use an OpenJDK Runtime as a parent image
FROM openjdk:17-oracle
# Define environment variables
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \JAVA_OPTS=""
# Set the working directory to /app
WORKDIR /pharmacy-locator
# Copy the executable into the container at /app
ADD target/*.jar pharmacy-locator-0.0.1-SNAPSHOT.jar
# Make port 8080 available to the world outside this container
EXPOSE 8090
# Run app.jar when the container launches
CMD ["java", "-jar", "/pharmacy-locator/pharmacy-locator-0.0.1-SNAPSHOT.jar"] 