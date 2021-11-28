#language: pt

Funcionalidade: Requerimento
  Como um aluno logado
  Quero acessar os Requimentos
  Para criar um novo requimento de atualização de nota

  Cenário: Criar novo requerimento
    Dado que um aluno logado acessa a página de novo requerimento
    Quando ele informar a disciplina 'ADS030 - Manutenção de Software e DevOps' e a prova 'A1' e a argumentação 'teste'
    Então ele deveria ver a mensagem 'Seus requerimentos'

  Cenário: Desistir de um novo requerimento
    Dado que um aluno logado acessa a página de novo requerimento
    Quando ele clicar em desistir
    Então ele deveria ver a mensagem 'Seus requerimentos'