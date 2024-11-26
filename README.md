# ToDo Jack

Um gerenciador de tarefas (Task Management), com funcionalidades para organizar e monitorar atividades, Permite criar, visualizar, editar e excluir tarefas.

<!-- A aplicação foi desenvolvida utilizando tecnologias como Node, Nest, SQLite, Prisma e Swagger.

## Índice

- [Screenshots](#screenshots)
- [Objetivos](#objetivos)
- [Minha caminhada](#minha-caminhada)
  - [Propriedades e Tecnologias](#propriedades-e-tecnologias)
  - [Meu aprendizado](#meu-aprendizado)
- [Rodando o projeto](#rodando-o-projeto)
- [Autor](#autor)

</br>

## Screenshots

![#](./public/desktop.png)

</br>

## Objetivos

Esta API tem como objetivo fornecer funcionalidades essenciais para a gestão de usuários, autenticação e manipulação de tarefas. Ela está organizada em tres categorias principais:

- User: Gerenciamento de usuários e recuperação de dados pessoais.
- Auth: Realização de login e autenticação segura.
- Todo: Criação, consulta, atualização e exclusão de tarefas.

> Utilizando o padrão OpenAPI (Swagger), para facilitar a documentação de todo o processo.

</br>

## Minha caminhada

- [x] Criação inicial do projeto de desenvolvimento da API
    - Criar o projeto com Nest CLI seguindo a estrutura MVC.
    - Criar o schema no banco de dados utilizando Prisma e SQLite.
- [x] Cadastro na plataforma
    - Criar a tabela de usuário no banco de dados.
    - Criar um endpoint POST para a criação do usuário.
    - Implementar a regra de negócio para salvar o usuário.
    - Registrar o usuário na base de dados.
- [x] Login na aplicação
    - Criar um endpoint GET para recuperar o usuário por e-mail e senha.
    - Implementar a regra de negócio para realizar o login.
    - Criar um endpoint POST para receber o e-mail e a senha.
- [x] Gerar JWT access token
    - Gerar um token de acesso JWT.
    - Retornar token ao realizar o login.
    - Criar um endpoint GET para recuperar o usuário logado.
- [x] Registrar uma tarefa
    - Criar uma migration no banco de dados para a tabela de tarefas
    - Implementar a regra de negócio para criação de tarefas.
- [x] Deletar tarefas
    - Implementar a regra de negócio para deletar tarefas por ID.
- [x] Atualizar tarefas
    - Implementar a regra de negócio para atualizar tarefas por ID.

</br>

## Propriedades e Tecnologias

- Node
- Nest
- SQLite
- Prisma
- Swagger

</br>

## Meu aprendizado

O processo de desenvolvimento da aplicação, esteve mais focado na implementação da autenticação.

A autenticação foi uma das partes mais complexas do projeto, envolvendo o uso do JSON Web Token (JWT) para gerenciar o fluxo de login, geração e validação de tokens, além do controle de sessões.

```tsx
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}
```

Aqui podemos destacar os responsáveis pelo processo de autenticação os "imports", "controllers" e "providers" no Auth.module:
* Imports
    - UserModule: Onde contém a lógica para acessar e gerenciar os dados do usuário.
    - PassportModule: Integra o framework de autenticação Passport.js, que simplifica a autenticação em aplicações Node.js.
    - JwtModule: Configura o uso de JWT (JSON Web Token), permitindo que tokens sejam gerados e verificados. O JwtModule.register define o segredo (secret) para assinar os tokens e a validade padrão do token (expiresIn: '30d'), que é de 30 dias (exemplo apenas para teste).

* Controllers
    - AuthController: Define a rota de login

* Providers
    - AuthService: Contém a lógica central de autenticação, como verificar credenciais e gerar tokens JWT.
    - LocalStrategy: Lida com autenticação por email e senha do usuário.
    - JwtStrategy: Verifica se o token JWT enviado pelo cliente é válido e autoriza o acesso às rotas protegidas.

Também foi essencial garantir a segurança dos dados sensíveis, utilizando algoritmos de criptografia e técnicas de hashing para armazenar senhas de forma segura.

Veja mais detalhes da implementação neste artigo [aqui](https://fabricadesinapse.gitbook.io/sinapse-book/nestjs/autenticacao-sistema-de-login-com-token-jwt)
</br>


## Rodando o projeto

![#](./public/desktop.gif)

### Pré-requisitos:
Certifique-se de que o Docker está instalado em sua máquina antes de prosseguir.

### 1 - Baixando as imagens:
O projeto utiliza duas imagens: uma para o backend e outra para o frontend. Para começar, abra qualquer terminal (cmd ou PowerShell) e execute os seguintes comandos, um de cada vez:

```bash
docker pull pedroalima/todo-jack-back:latest-v2
```
```bash
docker pull pedroalima/todo-jack-front:latest-v2
```
Nota: Aguarde o download de cada imagem antes de prosseguir.

### 2 - Executando as imagens:
Ainda no terminal, siga as instruções abaixo para rodar o backend e o frontend.

Para iniciar o backend na porta 3000, execute:

```bash
docker run -d -p 3000:3000 pedroalima/todo-jack-back:latest-v2
```
Para iniciar o frontend na porta 5000, execute:
```bash
docker run -d -p 5000:5000 pedroalima/todo-jack-front:latest-v2
```

### 3 - Testando o projeto:
Com tudo configurado, abra o navegador de sua preferência e acesse o endereço:

```bash
http://localhost:5000
```
Agora você pode explorar e testar o projeto à vontade!

Se desejar verificar a API acesse o endereço:
```bash
http://localhost:3000/api
``` 
-->

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)