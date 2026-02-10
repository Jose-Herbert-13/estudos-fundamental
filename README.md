📚 Plataforma Educacional – Ensino Fundamental

Projeto educacional interativo desenvolvido com Next.js, voltado para alunos do 4º ano do Ensino Fundamental, com foco em Português e Matemática.

🚀 Tecnologias Utilizadas

Next.js (App Router)

React 18

TypeScript

Tailwind CSS

API Routes (Backend integrado)

LocalStorage (persistência de progresso)

🎯 Funcionalidades

✔️ Questões interativas de Português e Matemática

✔️ Feedback visual imediato (acerto / erro)

✔️ Pontuação em tempo real

✔️ Progresso por sessão (ex: 3/10 perguntas)

✔️ Fim de jogo com resultado final

✔️ Persistência automática do progresso

✔️ Interface responsiva (mobile e desktop)

🧠 Arquitetura do Projeto
app/
 ├─ api/
 │   └─ questions/
 │       └─ route.ts        # API de questões
 └─ play/
     └─ [subject]/
         └─ page.tsx        # Lógica principal do jogo

components/
 └─ QuestionCard.tsx        # Componente de pergunta

▶️ Como Executar Localmente
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

Acesse: https://estudos-fundamental.vercel.app/

Desenvolvido por José Herbert Andrade Silva
Projeto educacional com foco em aprendizado prático e acessível.