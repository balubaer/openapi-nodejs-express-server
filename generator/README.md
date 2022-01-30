# OpenApi code generation
## Install generator -> CLI Installation
JAR location: https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.3.0/openapi-generator-cli-5.3.0.jar
```
wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.3.0/openapi-generator-cli-5.3.0.jar -O openapi-generator-cli.jar
```

Using generator in directory where the openapi.yaml and openapi-generator-cli-5.3.0.jar is
```
java -jar openapi-generator-cli-5.3.0.jar generate -g nodejs-express-server -o nodejs-express-server -i openapi.yaml
```
In nodejs-express-server directory (-o nodejs-express-server) you find the generated Code