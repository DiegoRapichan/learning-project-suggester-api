Learning Project Suggester API

API que sugere projetos práticos com base no conteúdo da aula, ajudando alunos a fixarem o aprendizado e a criarem projetos reais para portfólio (GitHub).

Objetivo

Um problema comum durante o aprendizado é concluir uma aula, entender o conteúdo, mas não saber como praticá-lo de forma concreta.

Esta API resolve esse problema sugerindo ideias de projetos práticos alinhados ao tema da aula, incentivando a aplicação imediata do conhecimento e a construção de portfólio.

Como funciona

A API recebe o nome da aula e retorna sugestões de projetos relacionadas ao conteúdo informado, com foco em:

Fixação do aprendizado

Aplicação prática do conteúdo

Criação de projetos reais para portfólio

Exemplo de requisição

POST /suggest-projects

{
  "lesson": "Manipulação do DOM"
}

Exemplo de resposta
{
  "lesson": "Manipulação do DOM",
  "suggestions": [
    {
      "title": "Lista de tarefas interativa",
      "description": "Aplicação para adicionar, remover e marcar tarefas usando manipulação do DOM",
      "skills": ["JavaScript", "DOM"]
    },
    {
      "title": "Filtro de produtos",
      "description": "Página que filtra itens dinamicamente com base em ações do usuário",
      "skills": ["JavaScript", "DOM"]
    }
  ]
}

Arquitetura da solução

Node.js + Express

Base curada de projetos por tema/aula

Regra de negócio desacoplada em services

Controllers responsáveis apenas pela requisição e resposta

Estrutura preparada para integração futura

src/
 ├─ routes/
 ├─ controllers/
 ├─ services/
 └─ data/

Evolução futura

Este projeto foi pensado para evoluir sem quebra de contrato, permitindo:

Integração direta com plataformas educacionais

Captura automática do nome da aula

Uso futuro de Inteligência Artificial para gerar sugestões dinâmicas

Manutenção do mesmo formato de resposta da API

Como executar o projeto
npm install
npm start


A API será executada em:

http://localhost:3000


Health check:

GET /health

Contribuição

Este projeto foi criado como uma contribuição educacional para a comunidade, com foco em aprendizado prático, colaboração e compartilhamento de conhecimento.

Autor:
Diego Colombari Rapichan
