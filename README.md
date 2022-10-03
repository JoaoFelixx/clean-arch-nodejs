# Clean Arch NodeJS (Typescript)

## Content 📚 🤓

> ***`Clean Arch:`*** _É Arquitetura de software é sobre as coisas importantes… Seja lá o que for_  
> **-- Ralph Johnson**

<br/>

## Main Packages 💻💡

* Express;
* Cors;
* mongoose (em conjunto com mongoDB);
* Typescript

<br/>

## Route System 📍

| HTTP  |    ROUTE    |  BODY  | DESCRIÇÃO  |
| ---   | ----------- | ------ | ---------- |
|  GET  | /post/:_id? |        |Pega todos os posts ou o post com o `_ID` especificado na URL. |
| POST  | /post       | ```{   _id: string tags: string[]; title: string; description: string; }```| Rota de criação de posts. |
|DELETE | /post/:_id |        | Deleta post com o ID especificado na URL. | 
|  PUT  | /post/:_id       | ```{   _id: string tags: string[]; title: string; description: string; }```| Rota de edição de um post já existente. |

<br/>

> ## References about clean arch

[Docs about clean arch with Node](http://www2.decom.ufop.br/terralab/uma-breve-introducao-a-arquitetura-limpa-com-node-js/)

[Clean arch project](https://github.com/rasouza/node-clean-architecture)