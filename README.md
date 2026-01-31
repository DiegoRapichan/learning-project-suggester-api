Learning Project Suggester API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST API](https://img.shields.io/badge/REST_API-009688?style=for-the-badge&logo=fastapi&logoColor=white)

API que sugere projetos práticos com base no conteúdo de uma aula, ajudando alunos a fixarem o aprendizado e transformarem teoria em projetos reais para portfólio (GitHub).

Objetivo

Durante os estudos, é comum entender o conteúdo da aula, mas ficar com a dúvida:

“Terminei a aula. O que eu posso construir agora para praticar isso de verdade?”

Esta API foi criada para resolver esse problema, sugerindo ideias de projetos práticos alinhadas ao tema da aula, incentivando a aplicação imediata do conhecimento e a construção de portfólio.

Como funciona

A API recebe informações sobre a aula (atualmente, o nome da aula informado manualmente) e retorna sugestões de projetos relacionadas ao conteúdo, com foco em:

Fixação do aprendizado

Aplicação prática do conteúdo

Criação de projetos reais para portfólio

Exemplo de entrada
{
  "aula": "Introdução ao DOM"
}

Exemplo de saída
{
  "aula": "Introdução ao DOM",
  "sugestoes": [
    {
      "nome": "Lista de Tarefas",
      "objetivo": "Manipular elementos dinamicamente no DOM",
      "conceitos": ["querySelector", "addEventListener", "classList"]
    },
    {
      "nome": "Modal Interativo",
      "objetivo": "Criar e controlar modais usando JavaScript",
      "conceitos": ["DOM", "Eventos", "CSS Classes"]
    }
  ]
}

Arquitetura da solução

Node.js + Express

Base de projetos organizada por tema/aula

Serviço de busca por palavras-chave

Retorno padronizado, pronto para integração via API

A lógica foi estruturada de forma desacoplada, permitindo fácil manutenção e evolução.

Evoluções futuras

Este projeto foi pensado para evoluir sem quebrar integrações existentes. Algumas possibilidades:

Integração direta com plataformas educacionais, consumindo automaticamente o nome da aula

Uso de Inteligência Artificial para gerar sugestões dinâmicas de projetos com base no conteúdo estudado

Personalização de sugestões conforme nível do aluno ou trilha de aprendizado

Manutenção do mesmo contrato de resposta da API, garantindo compatibilidade

Como executar o projeto
npm install
npm run dev


A API será executada em:

http://localhost:3000/sugestoes

Contribuição

Este projeto foi desenvolvido como uma contribuição educacional, com foco em aprendizado prático, organização de estudos e construção de portfólio.

Feedbacks e sugestões são bem-vindos.

Autor:
Diego Colombari Rapichan
https://github.com/DiegoRapichan
