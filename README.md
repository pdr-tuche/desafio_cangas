# desafio_cangas

🌵é o cangas !!!

## Sumário

-   [Desafio Backend](#desafio-backend)
    -   [Linguagem](#linguagem)
    -   [Bibliotecas](#bibliotecas)
    -   [Descrição](#descrição)
    -   [Requisitos](#requisitos)
        -   [Links](#links)
-   [Rodar Projeto](#rodar-projeto)
-   [Endpoints](#endpoints)
    -   [User endpoints](#user-endpoints)
        -   [/users](#users)
        -   [/users/:id](#usersid)
        -   [/users/:id/updatePassword](#usersidupdatepassword)
        -   [/users/recoverPassword/](#usersrecoverpassword)
        -   [/users/:id/confirmedRecover](#usersidconfirmedrecover)
    -   [Auth endpoints](#auth-endpoints)
        -   [/login](#login)
        -   [/verify](#verify)
    -   [Posts endpoints](#posts-endpoints)
        -   [/posts](#posts)
        -   [/posts/:id](#postsid)
    -   [Comentarios endpoints](#comentarios-endpoints)
        -   [/comments](#comments)
        -   [/comments/:id](#commentsid)

## Desafio Backend

### Linguagem

-   NodeJS

### Bibliotecas

-   express
-   jsonwebtoken
-   typeorm (banco de dados a sua escolha)
-   dotenv

### Descrição:

A aplicação consiste em um blog contendo postagens e comentários.

### Requisitos

-   A aplicação deve permitir usuários executarem as seguintes ações:
    -   criar conta (email, senha, dados não sensíveis)
    -   atualizar dados
    -   recuperar senha
    -   efetuar acesso
    -   criar postagens
    -   comentar em postagens de outros usuários
-   A aplicação deve possuir contagens de interações nos posts.

#### Links:

-   [express](https://expressjs.com/pt-br/)
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
-   [typeorm](https://typeorm.io/)
-   [dotenv](https://www.npmjs.com/package/dotenv)

## Rodar Projeto

1. Instalar dependências

    ```bash
    yarn
    ```

2. Criar seu banco de dados

-   Se tiver docker em sua máquina, há um arquivo `docker-compose.yml` que pode ser utilizado para criar o db.

    ```bash
    docker compose up
    ```

3. Criar arquivo `.env` baseado no arquivo `.env.example`:

    ```bash
    DB_HOST=        # <host do db>
    DB_PORT=        # <porta do db>
    DB_NAME=        # <nome do db>
    DB_USER=        # <nome de usuário do db>
    DB_PASSWORD=    # <senha do db>
    PORT=           # <porta onde será iniciado o servidor>
    JWT_SECRET=     # <hash de assinatura do token JWT>
    EMAIL_SERVICE=  # <seu provedor de email (gmail, outlook, ...)>
    EMAIL_HOST=     # <configuração do SMTP do seu provedor>
    EMAIL_PORT=     # <porta por onde seu provedor envia emails>
    EMAIL_USER=     # <endereço de email>
    EMAIL_PASSWORD= # <senha do email (gmail utiliza app password)>
    BASE_URL=       # URL da aplicação + PORT (http://localhost:3001)
    ```

4. Após criação do db e configuração do `.env`, rodar as migrações para criar as tabelas no db.

    ```bash
    yarn migration:run
    ```

-   Você pode popular seu banco de dados rodando as seeds:

    ```bash
    yarn seed:populate
    ```

5. Rodar servidor

    ```bash
    yarn dev
    ```

## Endpoints

### User endpoints

#### /users

-   get all users - GET
-   create user - POST:

    -   body:

        ```json
        {
            "name": "marcely",
            "email": "marcely@example.com",
            "password": "minhasenha"
        }
        ```

#### /users/:id

-   get user by id - GET
-   delete user - DELETE
-   update user - PUT

    -   body:

        ```json
        {
            "id": 2,
            "name": "nome para mudar",
            "email": "emailparamudar@example.com"
        }
        ```

#### /users/:id/updatePassword

-   update password - PUT

    -   body:

        ```json
        {
            "currentPassword": "minhasenha",
            "newPassword": "minhanovasenha",
            "reNewPassword": "minhanovasenha"
        }
        ```

#### /users/recoverPassword/

-   recover password - POST

    -   body:

        ```json
        {
            "email": "meuemail@example.com"
        }
        ```

-   será enviado um email com um link de recuperação de senha

#### /users/:id/confirmedRecover

> esta é o link que chegará no email, é necessário enviar a nova senha através do método POST

-   confirmed recover - POST

    -   body:

        ```json
        {
            "newPassword": "minhanovasenha",
            "reNewPassword": "minhanovasenha"
        }
        ```

### Auth endpoints

#### /login

-   Login - POST

    -   body:

        ```json
        {
            "email": "meuemail@example.com",
            "password": "minhasenha"
        }
        ```

-   após o envio da requisição, a resposta será as informações do usuário que está sendo logado e seu token JWT

#### /verify

-   Verify access token - GET

    -   header:

        ```bash
        curl -X GET \
            -H "Authorization: Bearer SEU_TOKEN_JWT_AQUI" \
            URL_DA_API
        ```

-   ao passar o token pelo header da requisição, será retornado dados do usuário caso o token seja válido, assim, confirmando que o usuário ainda está logado.

### Posts endpoints

#### /posts

-   get all posts - GET
-   create post - POST

    -   body:

        ```json
        {
            "title": "titulo do meu post", // pode ser null
            "content": "conteúdo do post",
            "user_id": 2 // id de quem está postando
        }
        ```

#### /posts/:id

-   get post by id - GET
-   delete post - DELETE
-   update post - PUT

    -   body:

        ```json
        {
            "title": "titulo do meu post", // pode ser null
            "content": "conteúdo do post"
        }
        ```

### Comentarios endpoints

#### /comments

-   get all comments - GET
-   create comment - POST

    -   body:

        ```json
        {
            "content": "conteudo do comentario",
            "post_id": 1, //id do post
            "user_id": 2 //id de quem está comentando
        }
        ```

#### /comments/:id

-   get comment by id - GET
-   delete comment - DELETE
-   update comment - PUT

    -   body:

        ```json
        {
            "content": "conteudo do comentario"
        }
        ```

<hr>
<div align="center">
    <h4>That's all folks!</h4>
    <img src="https://i.pinimg.com/564x/06/82/e2/0682e26f337825b366e8e3e3e0003ad1.jpg" alt="That's all folks!" width="300"/>
</div>
