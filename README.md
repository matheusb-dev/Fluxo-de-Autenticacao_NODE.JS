# Fluxo de Autenticacao - Node.js

Sistema de Fluxo-de-Autenticacao desenvolvido com Node.js, implementando boas práticas de arquitetura limpa e princípios SOLID.

## Estrutura do Projeto

```
src/
├── api/
│   ├── controllers/
│   │   └── UserController.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── validators/
│       └── userValidator.js
│
├── config/
│   ├── database.js
│   └── server.js
│
├── core/
│   ├── entities/
│   │   └── User.js
│   ├── repositories/
│   │   └── UserRepository.js
│   └── services/
│       └── UserService.js
│
├── database/
│   ├── models/
│   │   └── UserModel.js
│   └── migrations/
│
├── shared/
│   ├── errors/
│   │   └── AppError.js
│   └── utils/
│       ├── logger.js
│       └── response.js
│
├── tests/
│   ├── integration/
│   └── unit/
│
└── app.js
```

### Descrição das Pastas

#### `/api`
- **controllers/**: Controladores da API
- **middlewares/**: Middlewares personalizados
- **routes/**: Definição das rotas
- **validators/**: Validadores de entrada

#### `/config`
- Configurações do projeto
- Variáveis de ambiente
- Configuração do servidor

#### `/core`
- **entities/**: Entidades do domínio
- **repositories/**: Interfaces dos repositórios
- **services/**: Lógica de negócio

#### `/database`
- **models/**: Modelos do banco de dados
- **migrations/**: Migrações do banco

#### `/shared`
- **errors/**: Classes de erro personalizadas
- **utils/**: Utilitários comuns

#### `/tests`
- **integration/**: Testes de integração
- **unit/**: Testes unitários

## Principais Arquivos

- **app.js**: Ponto de entrada da aplicação
- **UserController.js**: Controlador de usuários
- **UserService.js**: Serviço com regras de negócio
- **UserRepository.js**: Repositório para persistência
- **User.js**: Entidade de usuário

## Arquitetura

O projeto segue uma arquitetura em camadas:
1. **API Layer**: Controllers, Routes, Middlewares
2. **Service Layer**: Regras de negócio
3. **Repository Layer**: Acesso a dados
4. **Entity Layer**: Modelos de domínio

## Padrões Utilizados

- Clean Architecture
- Repository Pattern
- Dependency Injection
- Service Layer Pattern
- MVC (adaptado)

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
