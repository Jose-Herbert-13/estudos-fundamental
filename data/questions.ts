import { Question } from "@/types/question";

export const questions: Record<string, Question[]> = {
  portugues: [
    // =====================
    // FÁCIL
    // =====================
    { id: 1, statement: "Qual é o plural de 'cão'?", options: ["Cães", "Cãos", "Cãoses", "Cãis"], correctAnswer: 0, difficulty: "facil" },
    { id: 2, statement: "Qual palavra está escrita corretamente?", options: ["caza", "casa", "cassa", "cassa"], correctAnswer: 1, difficulty: "facil" },
    { id: 3, statement: "Qual é o feminino de 'menino'?", options: ["menininha", "menina", "meninão", "meninaz"], correctAnswer: 1, difficulty: "facil" },
    { id: 4, statement: "Qual palavra é um verbo?", options: ["correr", "mesa", "livro", "janela"], correctAnswer: 0, difficulty: "facil" },
    { id: 5, statement: "Qual dessas palavras tem acento?", options: ["cafe", "lápis", "bola", "mesa"], correctAnswer: 1, difficulty: "facil" },
    { id: 6, statement: "Qual é o diminutivo de 'gato'?", options: ["gatinho", "gatozão", "gatão", "gatis"], correctAnswer: 0, difficulty: "facil" },
    { id: 7, statement: "Qual palavra indica lugar?", options: ["escola", "feliz", "correr", "alto"], correctAnswer: 0, difficulty: "facil" },
    { id: 8, statement: "Qual é o plural de 'flor'?", options: ["flores", "floris", "flors", "flore"], correctAnswer: 0, difficulty: "facil" },
    { id: 9, statement: "Qual é o oposto de 'alto'?", options: ["grande", "baixo", "forte", "longo"], correctAnswer: 1, difficulty: "facil" },
    { id: 10, statement: "Qual palavra é um substantivo?", options: ["mesa", "correr", "feliz", "rapidamente"], correctAnswer: 0, difficulty: "facil" },

    // =====================
    // MÉDIO
    // =====================
    { id: 11, statement: "Qual é o sinônimo de 'feliz'?", options: ["triste", "alegre", "bravo", "cansado"], correctAnswer: 1, difficulty: "medio" },
    { id: 12, statement: "Qual frase está no passado?", options: ["Eu estudo.", "Eu estudei.", "Eu estudarei.", "Eu estudava."], correctAnswer: 1, difficulty: "medio" },
    { id: 13, statement: "Qual palavra é um adjetivo?", options: ["bonito", "correr", "mesa", "livro"], correctAnswer: 0, difficulty: "medio" },
    { id: 14, statement: "Qual frase é interrogativa?", options: ["Eu gosto de bolo.", "Você gosta de bolo?", "Eu gosto de bolo!", "Gosto de bolo."], correctAnswer: 1, difficulty: "medio" },
    { id: 15, statement: "Qual é o plural de 'animal'?", options: ["animais", "animalis", "animales", "animau"], correctAnswer: 0, difficulty: "medio" },
    { id: 16, statement: "Qual palavra é um pronome?", options: ["ele", "mesa", "correr", "bonito"], correctAnswer: 0, difficulty: "medio" },
    { id: 17, statement: "Na frase 'João correu rápido', 'rápido' é:", options: ["substantivo", "verbo", "adjetivo", "advérbio"], correctAnswer: 3, difficulty: "medio" },
    { id: 18, statement: "Qual frase está no futuro?", options: ["Eu estudo.", "Eu estudei.", "Eu estudarei.", "Eu estudava."], correctAnswer: 2, difficulty: "medio" },
    { id: 19, statement: "Qual é o antônimo de 'claro'?", options: ["escuro", "forte", "largo", "alto"], correctAnswer: 0, difficulty: "medio" },
    { id: 20, statement: "Qual palavra completa: 'A menina é muito ____.'", options: ["alegre", "alegria", "alegrar", "alegres"], correctAnswer: 0, difficulty: "medio" },

    // =====================
    // DIFÍCIL
    // =====================
    { id: 21, statement: "Qual frase apresenta concordância correta?", options: ["As criança brinca.", "As crianças brincam.", "As criança brincam.", "A crianças brincam."], correctAnswer: 1, difficulty: "dificil" },
    { id: 22, statement: "Qual é o plural de 'pão'?", options: ["pãos", "pães", "pões", "pãis"], correctAnswer: 1, difficulty: "dificil" },
    { id: 23, statement: "Qual palavra é um advérbio?", options: ["rapidamente", "rápido", "rapidez", "corrida"], correctAnswer: 0, difficulty: "dificil" },
    { id: 24, statement: "Qual é o sujeito da frase 'O cachorro latiu alto'?", options: ["latiu", "alto", "O cachorro", "cachorro"], correctAnswer: 2, difficulty: "dificil" },
    { id: 25, statement: "Qual é o tempo verbal de 'cantaremos'?", options: ["presente", "passado", "futuro", "imperativo"], correctAnswer: 2, difficulty: "dificil" },
    { id: 26, statement: "Qual frase está correta?", options: ["A gente fomos.", "A gente foi.", "A gente foram.", "A gente ir."], correctAnswer: 1, difficulty: "dificil" },
    { id: 27, statement: "Qual palavra é oxítona?", options: ["café", "mesa", "bola", "casa"], correctAnswer: 0, difficulty: "dificil" },
    { id: 28, statement: "Qual palavra é um artigo?", options: ["o", "feliz", "correr", "rapidamente"], correctAnswer: 0, difficulty: "dificil" },
    { id: 29, statement: "Qual frase tem sujeito oculto?", options: ["Choveu ontem.", "Maria estudou.", "Eles correram.", "O menino brincou."], correctAnswer: 0, difficulty: "dificil" },
    { id: 30, statement: "Na frase 'As meninas brincavam felizes', o verbo está no:", options: ["presente", "passado", "futuro", "imperativo"], correctAnswer: 1, difficulty: "dificil" },
  ],

  matematica: [
    // =====================
    // FÁCIL
    // =====================
    { id: 1, statement: "Quanto é 5 + 3?", options: ["6", "7", "8", "9"], correctAnswer: 2, difficulty: "facil" },
    { id: 2, statement: "Quanto é 10 - 4?", options: ["5", "6", "7", "4"], correctAnswer: 1, difficulty: "facil" },
    { id: 3, statement: "Quanto é 2 x 6?", options: ["10", "12", "8", "14"], correctAnswer: 1, difficulty: "facil" },
    { id: 4, statement: "Quanto é 20 ÷ 5?", options: ["2", "3", "4", "5"], correctAnswer: 2, difficulty: "facil" },
    { id: 5, statement: "Qual é o dobro de 7?", options: ["12", "14", "16", "10"], correctAnswer: 1, difficulty: "facil" },
    { id: 6, statement: "Qual é o sucessor de 29?", options: ["28", "30", "31", "27"], correctAnswer: 1, difficulty: "facil" },
    { id: 7, statement: "Quanto é 9 + 8?", options: ["15", "16", "17", "18"], correctAnswer: 2, difficulty: "facil" },
    { id: 8, statement: "Quanto é 15 - 7?", options: ["6", "7", "8", "9"], correctAnswer: 2, difficulty: "facil" },
    { id: 9, statement: "Quanto é 3 x 4?", options: ["7", "12", "10", "14"], correctAnswer: 1, difficulty: "facil" },
    { id: 10, statement: "Quanto é 100 ÷ 10?", options: ["5", "20", "10", "15"], correctAnswer: 2, difficulty: "facil" },

    // =====================
    // MÉDIO
    // =====================
    { id: 11, statement: "Quanto é 12 x 8?", options: ["84", "96", "102", "88"], correctAnswer: 1, difficulty: "medio" },
    { id: 12, statement: "Quanto é 144 ÷ 12?", options: ["10", "11", "12", "13"], correctAnswer: 2, difficulty: "medio" },
    { id: 13, statement: "Qual é o triplo de 9?", options: ["18", "21", "27", "24"], correctAnswer: 2, difficulty: "medio" },
    { id: 14, statement: "Quanto é 45 + 37?", options: ["72", "82", "92", "75"], correctAnswer: 1, difficulty: "medio" },
    { id: 15, statement: "Quanto é 90 - 56?", options: ["34", "36", "44", "46"], correctAnswer: 0, difficulty: "medio" },
    { id: 16, statement: "Quanto é 7 x 9?", options: ["56", "63", "72", "49"], correctAnswer: 1, difficulty: "medio" },
    { id: 17, statement: "Quanto é 250 ÷ 5?", options: ["50", "40", "45", "55"], correctAnswer: 0, difficulty: "medio" },
    { id: 18, statement: "Qual é metade de 84?", options: ["42", "48", "44", "40"], correctAnswer: 0, difficulty: "medio" },
    { id: 19, statement: "Quanto é 18 x 3?", options: ["54", "48", "60", "36"], correctAnswer: 0, difficulty: "medio" },
    { id: 20, statement: "Quanto é 400 ÷ 8?", options: ["40", "50", "60", "45"], correctAnswer: 1, difficulty: "medio" },

    // =====================
    // DIFÍCIL
    // =====================
    { id: 21, statement: "Qual é o resultado de 125 + 378?", options: ["503", "493", "513", "523"], correctAnswer: 0, difficulty: "dificil" },
    { id: 22, statement: "Quanto é 864 ÷ 6?", options: ["124", "134", "144", "154"], correctAnswer: 2, difficulty: "dificil" },
    { id: 23, statement: "Quanto é 37 x 4?", options: ["148", "156", "144", "152"], correctAnswer: 0, difficulty: "dificil" },
    { id: 24, statement: "Quanto é 900 - 475?", options: ["425", "435", "415", "445"], correctAnswer: 0, difficulty: "dificil" },
    { id: 25, statement: "Qual é o perímetro de um quadrado de lado 6?", options: ["12", "24", "18", "36"], correctAnswer: 1, difficulty: "dificil" },
    { id: 26, statement: "Qual é a fração que representa metade?", options: ["1/3", "2/3", "1/2", "3/4"], correctAnswer: 2, difficulty: "dificil" },
    { id: 27, statement: "Quanto é 45 x 6?", options: ["260", "270", "280", "250"], correctAnswer: 1, difficulty: "dificil" },
    { id: 28, statement: "Quanto é 1000 ÷ 25?", options: ["40", "30", "50", "45"], correctAnswer: 0, difficulty: "dificil" },
    { id: 29, statement: "Qual é a área de um retângulo 5 x 8?", options: ["40", "13", "26", "35"], correctAnswer: 0, difficulty: "dificil" },
    { id: 30, statement: "Quanto é 72 ÷ 9?", options: ["6", "7", "8", "9"], correctAnswer: 2, difficulty: "dificil" },
  ],
};
