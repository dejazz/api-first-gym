## GYM API

Essa Api possui atualmente 3 endpoints. Sendo 1 de cadastro, 1 de login, e 1 de atualização dos dados do usuário.

## Base URL:

base Url:

## /user

**ex:POST baseUrl/user**<br/>
esse endpoint é responsável pelo cadastro de novos usuários. Para que seu uso seja feito da melhor forma segue abaixo o exemplo:

```
{
	"name":"teste",
	"cpf":"000000",
	"email":"test@gmail.com",
	"password":"12345"
}
```

201 OK

```
{
	"name": "ApenasUmTeste",
	"cpf": "0000000000",
	"email": "testando123@gmail.com",
	"avatarUrl": "https://i.pinimg.com/280x280_RS/6a/45/af/6a45afa30247dad1fe7c6dfd8b3fb9fb.jpg",
	"trainers": [],
	"updateAt": null,
	"_id": "627589b260c393b59befdbf1",
	"createdAt": "1651870130597",
	"__v": 0
}

```

## /login

**ex:POST baseUrl/user/login**<br/>
Esse endpoint está encarregado de fazer o login do usuário registrado no endpoint anterior. Segue abaixo um exemplo de requisição.

```
{
	"email": "testando123@gmail.com",
	"password":"12345"
}

```

201 OK

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU4OWIyNjBjMzkzYjU5YmVmZGJmMSIsImlhdCI6MTY1MTg3MDI5NywiZXhwIjoxNjUxOTU2Njk3fQ.Y6qTsFwiCJR4Dwo7eTaC-iYo49ryj8vxUDwGijpquhg",
	"userId": "627589b260c393b59befdbf1"
}
```

## /trainer

ex: **POST baseUrl/trainer <br/>
Esse endpoint cria o treino que o usuário irá fazer. Para que o endpoint funcione é necessário passar o **userId\*\* no body da requisição. Ex:

```
{
	"type":"Perna",
	"repetions":"3x15",
	"name":"agachamento",
	"userId": "62745fe1e6786495aead2fcd"
}

```

201 Created

```
{
	"name": "agachamento",
	"type": "Perna",
	"repetions": "3x15",
	"userId": "62745fe1e6786495aead2fcd",
	"updateAt": null,
	"_id": "62758ba660c393b59befdbf6",
	"createdAt": "1651870630548",
	"__v": 0
}

```
## /all
**GET baseUrl/trainer/all**
Esse endpoint retorna todos os exercicios criados, por todos os usuários.É preciso estar logado para ter acesso a esse endpoint, portanto é necessário passar o token no header da requisição. 

```
Não possui Body
header{
    Authorization: Bearer token
}
```
