## Descrição do Projeto
O projeto **Controle_de_Usuario_NODE.JS** é uma aplicação desenvolvida em Node.js para demonstrar funcionalidades de controle e gerenciamento de usuários. O sistema permite cadastrar, editar, listar e remover usuários, servindo como base para projetos que necessitam de autenticação, autorização e administração de usuários em sistemas back-end.

## Funcionalidades
- Cadastro de usuários
- Edição de informações dos usuários
- Listagem de todos os usuários
- Remoção de usuários
- Estrutura básica para autenticação (pode ser expandida)

## Tecnologias Utilizadas
- Node.js
- JavaScript

## Estrutura de Pastas

```
Controle_de_Usuario_NODE.JS/
├── docker-compose.yml
├── package.json
├── package-lock.json
├── redis.yml
├── swagger.yml
└── src/
    ├── app.js
    ├── server.js
    ├── config/
    │   ├── config.js
    │   └── index.js
    ├── Application/
    │   ├── DTOs/
    │   └── UseCases/
    ├── Domain/
    │   ├── Exceptions/
    │   ├── Repositories/
    │   └── User/
    └── Infrastructure/
        ├── Express/
        ├── Persistence/
        └── Providers/
```

- **docker-compose.yml**: Arquivo de configuração para containers Docker
- **package.json** e **package-lock.json**: Dependências e scripts do projeto
- **redis.yml**: Configuração do Redis
- **swagger.yml**: Documentação da API
- **src/**: Código-fonte da aplicação
  - **app.js** e **server.js**: Arquivos principais do servidor
  - **config/**: Configurações gerais
  - **Application/**: Casos de uso e DTOs
  - **Domain/**: Entidades, repositórios e exceções
  - **Infrastructure/**: Implementações de infraestrutura (Express, banco de dados, provedores)

## Contribuição
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias!

## Licença
Este projeto está sob a licença MIT.
