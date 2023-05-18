# Docker e Docker Compose para ambietes de desenvolvimento

## Como instalar o Docker Desktop
- Siga as instruções [desta página web](https://docs.docker.com/get-docker/), de acordo com seu sistema operacional. Atualmente o Docker Desktop está disponível para MacOS, Windows e Linux

### Como verificar se está tudo funcionado corretamete?
- Podemos verificar se a instalação foi feita corretamente acessando, via terminal, o CLI do Docker e pedindo as informações sobre a versão instalada:
```sh
docker version
```

- Podemos executar um container de uma imagem especial (feita exclusivamente pela Docker para testar a instalação do Docker):
```sh
docker container run hello-world
```

## Explorando comandos do Docker

### Para visualizar as imagens disponíveis
```sh
docker image ls
```

### Para listar os containers em execução
```sh
docker container ls
```

### Para listar todos os containers (em execução ou não)
```sh
docker container ls -a
docker container ls --all
```

### Parar remover todos os containers em execução
```sh
docker container rm -f $(docker container ls -aq)
```

### Para executar um container Ubuntu de forma interativa
```sh
docker container run -it ubuntu:bionic
```
- De dentro do container você pode executar o seguinte comando para verificar a versão do Ubuntu:
```sh
cat /etc/os-release
```

### Para executar um container Debian de forma interativa
```sh
docker container run -it debian:bullseye
```
- De dentro do container você pode executar o seguinte comando para verificar a versão do Ubuntu:
```sh
cat /etc/os-release
```

### Parar executar um container MySQL em background
```sh
docker run --name database -e MYSQL_ROOT_PASSWORD=password123 -d -p 3306:3306 mysql:8
```


### Para executar o NodeJS num container de forma interativa
```sh
docker container run -it --rm --name node -v $(PWD):/app -w /app node:18 /bin/bash
```
- Para executar o script `hello.js`, execute de dentro do container
```sh
node hello.js
```

### Para executar o PHP num container de forma interativa
```sh
docker container run -it --rm --name php -v $(PWD):/app -w /app php:8.2-cli /bin/bash
```
- Para executar o script `hello.php`, execute de dentro do container
```sh
php hello.php
```

### Para executar o Python num container de forma interativa
```sh
docker container run -it --rm --name python -v $(PWD):/app -w /app python:3 /bin/bash
```
- Para executar o script `hello.php`, execute de dentro do container
```sh
python hello.py
```

### Para executar o Go num container de forma interativa
```sh
docker container run -it --rm --name go -v $(PWD):/app -w /app golang:1.20 /bin/bash
```
- Para executar o script `hello.php`, execute de dentro do container
```sh
go run hello.go
```

### Para executar o Dart num container de forma interativa?
```sh
docker container run -it --rm --name dart -v $(PWD):/app -w /app dart:3-sdk /bin/bash
```
- Para executar o script `hello.php`, execute de dentro do container
```sh
dart run hello.dart
```

### Para executar o Java num container de forma interativa?
```sh
docker container run -it --rm --name java -v $(PWD):/app -w /app openjdk:8-jdk /bin/bash
```
- Para executar o script `hello.php`, execute de dentro do container
```sh
javac hello.java && java hello
```

## Explorando comandos do Docker Compose
### Para iniciar uma stack, em foreground, de containers usando o Docker Compose:
```sh
docker-compose up
```

### Para iniciar uma stack, em background, de containers usando o Docker Compose:
```sh
docker-compose up -d
```

### Para visualizar os containers que estão sendo administrados pelo Docker Compose:
```sh
docker-compose ps
```

### Para encerrar e remover os containers que estão sendo administrados pelo Docker Compose:
```sh
docker-compose down
```

### Para visualizar os logs de uma stack
```sh
docker-compose logs -f
```