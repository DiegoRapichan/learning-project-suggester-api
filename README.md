# Learning Project Suggester API

API REST que sugere projetos práticos personalizados com base no conteúdo de aulas, ajudando estudantes a transformar teoria em prática através de projetos reais para portfólio.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST API](https://img.shields.io/badge/REST_API-009688?style=for-the-badge&logo=fastapi&logoColor=white)

## 💡 O Problema

Durante os estudos de programação, é comum entender o conteúdo da aula mas ficar com a dúvida:

> **"Terminei a aula. O que eu posso construir agora para praticar isso de verdade?"**

Esta API foi criada para resolver esse problema, fornecendo sugestões inteligentes de projetos práticos alinhados ao tema estudado.

## 🎯 Objetivo

Conectar teoria e prática através de sugestões de projetos que:

- ✅ Fixam o aprendizado de forma imediata
- ✅ Aplicam conceitos em cenários reais
- ✅ Geram projetos para portfólio profissional
- ✅ Incentivam a prática consistente

## 🚀 Como Funciona

A API recebe informações sobre a aula estudada e retorna sugestões de projetos práticos relacionados ao conteúdo.

### Exemplo de Requisição

```http
POST /api/sugestoes
Content-Type: application/json

{
  "aula": "Introdução ao DOM"
}
```

### Exemplo de Resposta

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
      "nome": "Modal Interativo",
      "objetivo": "Criar e controlar modais usando JavaScript puro",
      "conceitos": ["DOM", "Eventos", "CSS Classes", "Manipulação de estilos"],
      "dificuldade": "iniciante",
      "tempoEstimado": "1-2 horas"
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

## 🏗️ Arquitetura

```
learning-project-suggester-api/
├── src/
│   ├── config/
│   │   └── database.js          # Configuração do banco (futuro)
│   ├── controllers/
│   │   └── suggestionController.js
│   ├── services/
│   │   └── projectMatcher.js    # Lógica de matching de projetos
│   ├── data/
│   │   └── projectsDatabase.js  # Base de projetos por tema
│   ├── routes/
│   │   └── suggestionRoutes.js
│   └── server.js
├── .env
├── .env.example
├── package.json
└── README.md
```

### Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **JavaScript** - Linguagem de programação

### Design Principles

- ✅ Código desacoplado e modular
- ✅ Arquitetura em camadas (Controllers, Services, Data)
- ✅ Fácil manutenção e extensibilidade
- ✅ Padrões RESTful

## 🔧 Como Executar Localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/DiegoRapichan/learning-project-suggester-api.git
cd learning-project-suggester-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente (se necessário):

```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Endpoints da API

### Obter Sugestões de Projetos

```http
POST /api/sugestoes
Content-Type: application/json

{
  "aula": "Nome da aula ou tema estudado"
}
```

**Resposta de Sucesso (200):**

```json
{
  "aula": "string",
  "sugestoes": [
    {
      "nome": "string",
      "objetivo": "string",
      "conceitos": ["string"],
      "dificuldade": "string",
      "tempoEstimado": "string"
    }
  ]
}
```

**Resposta de Erro (400):**

```json
{
  "erro": "Parâmetro 'aula' é obrigatório"
}
```

**Resposta quando não há sugestões (404):**

```json
{
  "mensagem": "Nenhuma sugestão encontrada para este tema",
  "sugestao": "Tente termos mais genéricos ou consulte nossa lista de temas disponíveis"
}
```

### Health Check

```http
GET /
```

Retorna status da API.

## 🔮 Roadmap de Evolução

Este projeto foi arquitetado para evoluir de forma incremental, mantendo compatibilidade com integrações existentes:

### Fase 1: MVP (Atual) ✅
- [x] API REST básica com Express
- [x] Base de projetos estática organizada por tema
- [x] Sistema de busca por palavras-chave
- [x] Retorno padronizado em JSON

### Fase 2: Inteligência de Dados 🔄
- [ ] Banco de dados relacional (PostgreSQL)
- [ ] Sistema de tags e categorização avançada
- [ ] Filtros por dificuldade e tempo estimado
- [ ] Histórico de sugestões por usuário

### Fase 3: Integração com Plataformas 🔮
- [ ] Webhooks para plataformas de ensino (Udemy, Coursera, etc.)
- [ ] Scraping automático de conteúdo de aulas
- [ ] API pública para desenvolvedores educacionais

### Fase 4: Inteligência Artificial 🤖
- [ ] Geração dinâmica de projetos via LLM (GPT/Claude)
- [ ] Personalização baseada em perfil do estudante
- [ ] Análise de código dos projetos submetidos
- [ ] Sugestões de melhorias em projetos existentes

### Fase 5: Gamificação 🎮
- [ ] Sistema de conquistas e badges
- [ ] Rankings de projetos concluídos
- [ ] Desafios semanais da comunidade

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Este é um projeto educacional open-source.

### Como contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Áreas onde você pode ajudar:

- 📝 Adicionar mais sugestões de projetos ao database
- 🐛 Reportar e corrigir bugs
- 📚 Melhorar a documentação
- ✨ Sugerir novas funcionalidades
- 🧪 Adicionar testes automatizados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Diego Colombari Rapichan**

- GitHub: [@DiegoRapichan](https://github.com/DiegoRapichan)
- LinkedIn: [Diego Rapichan](https://www.linkedin.com/in/diego-rapichan) *(adicione seu link)*
- Email: *(adicione seu email se desejar)*

---

Desenvolvido como parte da jornada de transição de carreira para JavaScript Fullstack 🚀

*Se este projeto te ajudou, considere dar uma ⭐ no repositório!*
