# Learning Project Suggester API

> API REST que sugere projetos práticos personalizados com base no conteúdo de aulas — conecta teoria e prática, ajudando estudantes a fixar o aprendizado construindo projetos reais.

![Node.js](https://img.shields.io/badge/Node.js_18-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

⭐ **2 GitHub Stars**

**[📁 Repositório](https://github.com/DiegoRapichan/learning-project-suggester-api)**

---

## 💡 O Problema

Quem estuda programação frequentemente termina uma aula sabendo o conteúdo mas sem saber o que construir para fixar o aprendizado. Esta API resolve isso: recebe o tema da aula e retorna sugestões de projetos práticos alinhados ao conteúdo, com objetivo, conceitos aplicados, dificuldade e tempo estimado.

---

## 🛠️ Stack

`Node.js 18` `Express.js` `JavaScript`

**Arquitetura em camadas:** Controllers → Services → Data

---

## 🔌 Endpoint

```
POST /api/sugestoes
Content-Type: application/json

{ "aula": "Introdução ao DOM" }
```

**Resposta:**
```json
{
  "aula": "Introdução ao DOM",
  "sugestoes": [
    {
      "nome": "Lista de Tarefas Interativa",
      "objetivo": "Manipular elementos dinamicamente no DOM",
      "conceitos": ["querySelector", "addEventListener", "classList"],
      "dificuldade": "iniciante",
      "tempoEstimado": "2-3 horas"
    },
    {
      "nome": "Galeria de Imagens com Lightbox",
      "objetivo": "Implementar navegação e exibição dinâmica de imagens",
      "conceitos": ["querySelector", "Event Delegation", "DOM Traversal"],
      "dificuldade": "intermediário",
      "tempoEstimado": "3-4 horas"
    }
  ]
}
```

---

## 📁 Estrutura

```
learning-project-suggester-api/
└── src/
    ├── controllers/
    │   └── suggestionController.js
    ├── services/
    │   └── projectMatcher.js      # Lógica de matching por tema
    ├── data/
    │   └── projectsDatabase.js    # Base de projetos por tema
    ├── routes/
    │   └── suggestionRoutes.js
    └── server.js
```

---

## 🚀 Como Rodar Localmente

```bash
git clone https://github.com/DiegoRapichan/learning-project-suggester-api.git
cd learning-project-suggester-api
npm install
npm run dev   # http://localhost:3000
```

---

## 🔮 Roadmap

- **Atual:** matching por palavras-chave com base estática de projetos
- **Próximo:** PostgreSQL + filtros por dificuldade e histórico por usuário
- **Futuro:** integração com LLM para geração dinâmica de sugestões baseada no perfil do estudante

---

## 👨‍💻 Autor

**Diego Rapichan** — Desenvolvedor Full Stack · Node.js + React

[![LinkedIn](https://img.shields.io/badge/LinkedIn-diego--rapichan-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/diego-rapichan)
[![GitHub](https://img.shields.io/badge/GitHub-DiegoRapichan-181717?style=flat&logo=github)](https://github.com/DiegoRapichan)

---

📄 Licença MIT
