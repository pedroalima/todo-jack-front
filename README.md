# ToDo Jack

Um gerenciador de tarefas (Task Management), com funcionalidades para organizar e monitorar atividades, Permite criar, visualizar, editar e excluir tarefas.

A aplicação foi desenvolvida utilizando tecnologias como TypeScript, React e TailwindCSS.

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

A aplicação tem como finalidade o gerenciamento de tarefas.

Os usuários podem realizar as seguintes ações:

- Registrar-se como um novo usuário;
- Fazer login na aplicação;
- Criar, atualizar e excluir tarefas;
- Alterar o status de uma tarefa;
- Filtrar tarefas por status.
</br>

## Minha caminhada

[x] Configuração inicial do projeto
- Configurar o projeto utilizando React (Vite).
- Organizar a estrutura de pastas seguindo boas práticas.
- Configurar gerenciador de estado (Context API).
- Configurar o TailwindCSS.

[x] Cadastro de usuários
- Criar uma página de registro com campos para e-mail, nome e senha e confirmação de senha.
- Implementar validações.
- Conectar a página ao endpoint de cadastro (POST) via Axios.

[x] Login na aplicação
- Criar uma página de login com campos para e-mail e senha.
- Conectar ao endpoint de login (POST) e armazenar o JWT token nos cookies.
- Implementar redirecionamento para a página principal (Dashboard) após o login bem-sucedido.

[x] Tela principal (Dashboard)
- Criar uma página para exibir todas as tarefas do usuário.
- Conectar ao endpoint GET para recuperar as tarefas do banco de dados.
- Implementar filtros por status (todo, in progress, completed).
- Exibir as tarefas em uma tabela.

[x] Registro de tarefas
- Criar um formulário para adicionar novas tarefas.
- Conectar ao endpoint POST para criar uma tarefa.
- Atualizar automaticamente a listagem de tarefas após a criação.

[x] Atualização de tarefas
- Adicionar funcionalidade para editar tarefas diretamente na listagem.
- Conectar ao endpoint PATCH para atualizar a tarefa por ID.

[x] Exclusão de tarefas
- Adicionar funcionalidade para excluir tarefas.
- Conectar ao endpoint DELETE para remover tarefas por ID.
- Atualizar automaticamente a listagem após a exclusão bem-sucedida.

[x] Autenticação e proteção de rotas
- Proteger as rotas privadas verificando a presença do JWT token.
- Redirecionar o usuário para a página de login caso não esteja autenticado.
- Implementar funcionalidade de logout (remover o token e redirecionar para o login).

[x] Melhorias visuais
- Adicionar feedbacks visuais para interações do usuário.
</br>

## Propriedades e Tecnologias

- TypeScript
- React (Vite)
- TailwindCSS
- Shadcn/ui
- Axios
- Prettier
</br>

## Meu aprendizado

O processo de desenvolvimento da aplicação, esteve mais focado na implementação da autenticação.

Implementar a autenticação no cliente exigiu um entendimento claro sobre como gerenciar o estado do usuário e proteger as rotas da aplicação. Aprendi a criar um fluxo de autenticação eficiente, onde usuários não autenticados eram redirecionados automaticamente para a página de login, enquanto os autenticados tinham acesso às áreas restritas. Utilizei o Context API do React, para centralizar as informações sobre o status de login do usuário.

```tsx
import { createUser, getUser, loginUser } from "@/services/UserService";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

export type SignInType = {...};

export type SignUpType = {...};

export type UserType = {...};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserType | undefined;
  signIn: ({ email, password }: SignInType) => Promise<void>;
  signUp: ({ email, name, password }: SignUpType) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | undefined>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInType) {
    const { access_token, user } = await loginUser({ email, password });

    setCookie(undefined, "jack_token", access_token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });
    setUser(user);
  }

  async function signUp({ email, name, password } : SignUpType) {
    await createUser({ email, password, name});
  }

  useEffect(() => {
    const { jack_token: token } = parseCookies();

    if (token) {
      (async () => {
        const userData = await getUser();
        setUser(userData);
      })();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
```
AuthProvider é responsável pelo gerenciamento de autenticação, permitindo que os componentes filhos tenham acesso fácil a informações e funções relacionadas à autenticação do usuário.
</br>

## Rodando o projeto

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

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)