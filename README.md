NodeJs GraphQL Docker Caixa Eletrônico

Uma API que simula transações de caixa eletrônico.

Você precisa ter o docker e o docker-compose instalados em sua máquina

Instalação da aplicação:

    "clone" o projeto do repositório

    Vá ao diretório do seu projeto e utilize os comandos:
    $ docker-compose build
    $ docker-compose up 

O projeto node vai estar rodando em http://localhost:4000/graphql

A interface do admin-mongo será exibida em http://localhost:8082/
Adicione um nome aleatório à sua conexão e, no campo string de conexão, coloque a seguinte string de conexão (mongodb://mongo/caixaeletronicodb)


Contas existentes e seus saldos iniciais:
conta: 123, saldo: 100
conta: 456, saldo: 200
conta: 789, saldo: 300
conta: 54321, saldo: 400