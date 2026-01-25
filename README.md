# Learning Project Suggester API

API que sugere **projetos práticos** com base no conteúdo da aula, ajudando alunos a fixarem o aprendizado e gerarem projetos reais para portfólio (GitHub).

## 🎯 Objetivo

Um problema comum no aprendizado é:

> “Terminei a aula, entendi o conteúdo, mas não sei o que construir agora.”

Esta API resolve isso sugerindo **ideias de projetos práticas**, alinhadas ao tema da aula, incentivando a aplicação imediata do conhecimento.

---

## 🚀 Como funciona

A API recebe informações sobre a aula (ex: nome da aula) e retorna sugestões de projetos relacionados, com foco em:

- Fixação do conteúdo
- Aplicação prática
- Criação de portfólio

### Exemplo de entrada

```json
{
  "aula": "Introdução ao DOM"
}
```

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

🧠 Arquitetura da solução

Node.js + Express

Base curada de projetos por tema/aula

Serviço de busca por palavras-chave

Retorno padronizado (API-ready)

A lógica foi estruturada de forma desacoplada, permitindo fácil evolução.

🔮 Evolução futura

Esta API foi pensada para, no futuro:

Integrar diretamente com plataformas educacionais

Receber automaticamente o nome da aula

Utilizar Inteligência Artificial para gerar sugestões dinâmicas de projetos

Manter o mesmo contrato de resposta (sem quebrar integrações)

🛠️ Como executar o projeto

npm install
npm run dev

A API será executada em:

http://localhost:3000/sugestoes

🤝 Contribuição

Este projeto foi criado como uma contribuição educacional para a comunidade, com foco em aprendizado prático e colaborativo.

Diego Colombari Rapichan
