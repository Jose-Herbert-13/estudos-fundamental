import type { Question } from "@/types/question";

export const questions: {
  portugues: Record<string, Question[]>;
  matematica: Record<string, Question[]>;
} = {
  portugues: {
    ortografia: [
      // Facil (1–10)
      {
        id: 1,
        statement: "Qual está escrito corretamente?",
        options: ["caza", "casaa", "casa", "cassa"],
        correctAnswer: 2,
        difficulty: "facil",
      },
      {
        id: 2,
        statement: "Qual tem acento?",
        options: ["lapis", "lápis", "lapís", "lapi"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 3,
        statement: "Qual palavra tem mais de uma sílaba?",
        options: ["sol", "mar", "viver", "luz"],
        correctAnswer: 2,
        difficulty: "facil",
      },
      {
        id: 4,
        statement: "Qual está correta?",
        options: ["janella", "janela", "jannela", "janéla"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 5,
        statement: "Qual é o plural de flor?",
        options: ["flors", "flores", "flore", "floris"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 6,
        statement: "Qual começa com letra maiúscula?",
        options: ["brasil", "rio", "Brasil", "cidade"],
        correctAnswer: 2,
        difficulty: "facil",
      },
      {
        id: 7,
        statement: "Qual palavra está correta?",
        options: ["meninu", "menino", "meninno", "menyno"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 8,
        statement: "Qual é o diminutivo de casa?",
        options: ["casinha", "casão", "casudo", "casar"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 9,
        statement: "Qual está escrita corretamente?",
        options: ["escola", "esçola", "escolla", "escóla"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 10,
        statement: "Qual palavra tem acento?",
        options: ["avo", "avó", "avoa", "avoá"],
        correctAnswer: 1,
        difficulty: "facil",
      },

      // Medio (11–20)
      {
        id: 11,
        statement: "Assinale a palavra com erro:",
        options: ["bonito", "feliz", "criança", "esçola"],
        correctAnswer: 3,
        difficulty: "medio",
      },
      {
        id: 12,
        statement: "Em qual palavra o 'x' tem som de 's'?",
        options: ["exame", "tóxico", "xícara", "axé"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 13,
        statement: "Qual palavra tem dígrafo?",
        options: ["chave", "lá", "cão", "sol"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 14,
        statement: "Qual palavra tem encontro consonantal?",
        options: ["praia", "casa", "avó", "pé"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 15,
        statement: "Qual palavra está incorreta?",
        options: ["excessão", "exceção", "coração", "razão"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 16,
        statement: "Qual tem hiato?",
        options: ["saída", "casa", "porta", "vento"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 17,
        statement: "Qual palavra é paroxítona?",
        options: ["mesa", "café", "pá", "pé"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 18,
        statement: "Qual palavra tem acento diferencial?",
        options: ["pôde", "pode", "poda", "podê"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 19,
        statement: "Qual palavra está no plural corretamente?",
        options: ["mãos", "mãoes", "mãoses", "maos"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 20,
        statement: "Qual palavra tem prefixo?",
        options: ["refazer", "casa", "mesa", "flor"],
        correctAnswer: 0,
        difficulty: "medio",
      },

      // Dificil (21–30)
      {
        id: 21,
        statement: "Qual é o plural de 'pão'?",
        options: ["pãos", "pães", "paoes", "pãis"],
        correctAnswer: 1,
        difficulty: "dificil",
      },
      {
        id: 22,
        statement: "Qual palavra é oxítona?",
        options: ["mesa", "café", "fácil", "amigo"],
        correctAnswer: 1,
        difficulty: "dificil",
      },
      {
        id: 23,
        statement: "Qual palavra é proparoxítona?",
        options: ["lâmpada", "café", "amor", "feliz"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 24,
        statement: "Qual palavra contém ditongo?",
        options: ["pai", "pé", "mar", "sol"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 25,
        statement: "Qual palavra é derivada?",
        options: ["infelizmente", "feliz", "mar", "sol"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 26,
        statement: "Qual palavra é composta?",
        options: ["guarda-chuva", "casa", "flor", "vento"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 27,
        statement: "Qual palavra apresenta sufixo?",
        options: ["felicidade", "feliz", "mar", "pé"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 28,
        statement: "Qual palavra é homônima de 'cela'?",
        options: ["sela", "célula", "cena", "sena"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 29,
        statement: "Qual palavra tem acento por ser proparoxítona?",
        options: ["médico", "amor", "café", "mar"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 30,
        statement: "Qual palavra apresenta encontro vocálico?",
        options: ["saúde", "mar", "flor", "pé"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
    ],

    classes_gramaticais: [
      // Facil (31–40)
      {
        id: 31,
        statement: "Qual das palavras é um verbo?",
        options: ["correr", "mesa", "bonito", "alto"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 32,
        statement: "Qual palavra é substantivo?",
        options: ["casa", "feliz", "rapidamente", "pular"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 33,
        statement: "Qual palavra é adjetivo?",
        options: ["grande", "correr", "mesa", "ontem"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 34,
        statement: "Qual palavra é pronome?",
        options: ["ele", "casa", "bonito", "andar"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 35,
        statement: "Qual palavra indica ação?",
        options: ["pular", "livro", "feliz", "alto"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 36,
        statement: "Qual palavra indica lugar?",
        options: ["aqui", "correr", "grande", "azul"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 37,
        statement: "Qual palavra é artigo?",
        options: ["o", "casa", "bonito", "correr"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 38,
        statement: "Qual palavra é numeral?",
        options: ["dois", "correr", "feliz", "mesa"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 39,
        statement: "Qual palavra é interjeição?",
        options: ["Nossa!", "casa", "feliz", "andar"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 40,
        statement: "Qual palavra é adjetivo?",
        options: ["bonito", "livro", "correr", "amanhã"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      // Medio (31–40)
      {
        id: 41,
        statement: "Na frase: 'O menino feliz correu.', qual é o adjetivo?",
        options: ["menino", "feliz", "correu", "o"],
        correctAnswer: 1,
        difficulty: "medio",
      },
      {
        id: 42,
        statement: "Qual palavra é advérbio?",
        options: ["rapidamente", "casa", "azul", "correr"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 43,
        statement: "Qual é o substantivo coletivo?",
        options: ["alcateia", "lobo", "feliz", "andar"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 44,
        statement: "Na frase: 'Eles estudaram muito.', qual é o pronome?",
        options: ["Eles", "estudaram", "muito", "frase"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 45,
        statement: "Qual palavra é preposição?",
        options: ["de", "livro", "bonito", "andar"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 46,
        statement: "Qual palavra é conjunção?",
        options: ["mas", "casa", "feliz", "andar"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 47,
        statement: "Qual palavra indica quantidade?",
        options: ["muitos", "correr", "feliz", "azul"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 48,
        statement: "Na frase: 'A menina estudiosa venceu.', qual é o substantivo?",
        options: ["menina", "estudiosa", "venceu", "a"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 49,
        statement: "Qual palavra é verbo no passado?",
        options: ["correu", "correr", "correndo", "corre"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 50,
        statement: "Qual palavra é adjetivo na frase: 'Carro veloz'?",
        options: ["carro", "veloz", "de", "o"],
        correctAnswer: 1,
        difficulty: "medio",
      },
      //Dificil (51–60)
      {
        id: 51,
        statement: "Qual é o verbo na frase: 'Nós brincávamos no parque.'?",
        options: ["Nós", "brincávamos", "parque", "no"],
        correctAnswer: 1,
        difficulty: "dificil",
      },
      {
        id: 52,
        statement: "Qual é o sujeito da frase: 'Pedro estudou matemática.'?",
        options: ["Pedro", "estudou", "matemática", "frase"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 53,
        statement: "Qual palavra está no plural?",
        options: ["livros", "livro", "feliz", "andar"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 54,
        statement: "Qual palavra é verbo no futuro?",
        options: ["estudará", "estuda", "estudou", "estudar"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 55,
        statement: "Qual palavra é advérbio de tempo?",
        options: ["ontem", "correr", "feliz", "azul"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 56,
        statement: "Qual palavra é substantivo próprio?",
        options: ["Brasil", "país", "cidade", "menino"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 57,
        statement: "Qual palavra é substantivo abstrato?",
        options: ["amor", "mesa", "livro", "caneta"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 58,
        statement: "Qual palavra é verbo no presente?",
        options: ["estuda", "estudou", "estudará", "estudar"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 59,
        statement: "Qual palavra é adjetivo pátrio?",
        options: ["brasileiro", "Brasil", "cidade", "feliz"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 60,
        statement: "Qual palavra indica intensidade?",
        options: ["muito", "casa", "feliz", "andar"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
    ],

    interpretacao: [
    // Facil (61–70)
      {
        id: 61,
        statement: `Leia: "O gato subiu no telhado."
        Onde o gato está?`,
        options: ["Na rua", "No telhado", "Na cozinha", "Na escola"],
        correctAnswer: 1,
        difficulty: "facil"
      },
      {
        id: 62,
        statement: `Leia: "A menina tomou sorvete."
        O que a menina fez?`,
        options: ["Brincou", "Estudou", "Tomou sorvete", "Dormiu"],
        correctAnswer: 2,
        difficulty: "facil"
      },
      {
        id: 63,
        statement: `Leia: "O cachorro correu atrás da bola."
        O cachorro correu atrás de quê?`,
        options: ["Do gato", "Da bola", "Do carro", "Do menino"],
        correctAnswer: 1,
        difficulty: "facil"
      },
      {
        id: 64,
        statement: `Leia: "Maria abriu o livro."
        O que Maria abriu?`,
        options: ["A porta", "O livro", "A janela", "A mochila"],
        correctAnswer: 1,
        difficulty: "facil"
      },
      {
        id: 65,
        statement: `Leia: "O sol apareceu no céu."
        O que apareceu?`,
        options: ["A lua", "A chuva", "O sol", "A estrela"],
        correctAnswer: 2,
        difficulty: "facil"
      },
      {
        id: 66,
        statement: `Leia: "O menino caiu no chão."
        O que aconteceu com o menino?`,
        options: ["Ele pulou", "Ele caiu", "Ele correu", "Ele dançou"],
        correctAnswer: 1,
        difficulty: "facil"
      },
      {
        id: 67,
        statement: `Leia: "A professora explicou a lição."
        Quem explicou a lição?`,
        options: ["O aluno", "A diretora", "A professora", "O pai"],
        correctAnswer: 2,
        difficulty: "facil"
      },
      {
        id: 68,
        statement: `Leia: "O peixe nada no rio."
        Onde o peixe nada?`,
        options: ["Na areia", "No rio", "Na árvore", "Na escola"],
        correctAnswer: 1,
        difficulty: "facil"
      },
      {
        id: 69,
        statement: `Leia: "A criança chorou porque se machucou."
        Por que a criança chorou?`,
        options: ["Porque brincou", "Porque caiu", "Porque se machucou", "Porque dormiu"],
        correctAnswer: 2,
        difficulty: "facil"
      },
      {
        id: 70,
        statement: `Leia: "O pássaro voou alto."
        O que o pássaro fez?`,
        options: ["Correu", "Pulou", "Voou", "Dormiu"],
        correctAnswer: 2,
        difficulty: "facil"
      },
      // Medio (71–80)
      {
        id: 71,
        statement: `Leia: "João estudou a semana inteira para a prova. No dia do teste, ficou tranquilo."
        Por que João ficou tranquilo?`,
        options: [
          "Porque não estudou",
          "Porque estudou bastante",
          "Porque faltou à prova",
          "Porque estava com medo"
        ],
        correctAnswer: 1,
        difficulty: "medio"
      },
      {
        id: 72,
        statement: `Leia: "O céu ficou escuro e o vento soprou forte."
        O que provavelmente aconteceu depois?`,
        options: [
          "Fez calor",
          "Começou uma tempestade",
          "Saiu o sol",
          "As pessoas foram à praia"
        ],
        correctAnswer: 1,
        difficulty: "medio"
      },
      {
        id: 73,
        statement: `Leia: "Mariana abriu o presente e sorriu."
        O que podemos concluir?`,
        options: [
          "Ela não gostou",
          "Ela ficou triste",
          "Ela gostou",
          "Ela rasgou o presente"
        ],
        correctAnswer: 2,
        difficulty: "medio"
      },
      {
        id: 74,
        statement: `Leia: "Pedro perdeu o ônibus e chegou atrasado."
        Qual foi a causa do atraso?`,
        options: [
          "Acordou cedo",
          "Perdeu o ônibus",
          "Chegou antes",
          "Estudou demais"
        ],
        correctAnswer: 1,
        difficulty: "medio"
      },
      {
        id: 75,
        statement: `Leia: "Ana treinou todos os dias e ganhou a medalha."
        O que ajudou Ana a ganhar?`,
        options: [
          "A sorte",
          "O treino",
          "O descanso",
          "A ajuda do juiz"
        ],
        correctAnswer: 1,
        difficulty: "medio"
      },
      {
        id: 76,
        statement: `Leia: "Sofia fechou a janela porque o vento estava forte."
        Qual foi o motivo?`,
        options: ["Chuva", "Vento forte", "Frio", "Barulho"],
        correctAnswer: 1,
        difficulty: "medio"
      },
      {
        id: 77,
        statement: `Leia: "O cachorro latiu ao ouvir o barulho."
        Por que ele latiu?`,
        options: [
          "Porque ouviu um barulho",
          "Porque dormia",
          "Porque comeu",
          "Porque brincava"
        ],
        correctAnswer: 0,
        difficulty: "medio"
      },
      {
        id: 78,
        statement: `Leia: "Lucas estava com febre e ficou em casa."
        Por que ficou em casa?`,
        options: [
          "Porque estava doente",
          "Porque era domingo",
          "Porque queria brincar",
          "Porque estava feliz"
        ],
        correctAnswer: 0,
        difficulty: "medio"
      },
      {
        id: 79,
        statement: `Leia: "A professora pediu silêncio, mas a turma continuou conversando."
        O que isso mostra?`,
        options: [
          "A turma obedeceu",
          "A turma ignorou o pedido",
          "A aula terminou",
          "A professora saiu"
        ],
        correctAnswer: 1,
        difficulty: "medio"
      },
      {
        id: 80,
        statement: `Leia: "O menino correu quando começou a chover."
        O que fez ele correr?`,
        options: ["O sol", "A chuva", "O frio", "A fome"],
        correctAnswer: 1,
        difficulty: "medio"
      },
      // Dificil (81–90)
      {
        id: 81,
        statement: `Leia: "Carlos respirou fundo ao ver sua nota."
        O que ele provavelmente sentiu?`,
        options: [
          "Alegria",
          "Surpresa ou preocupação",
          "Sono",
          "Vontade de brincar"
        ],
        correctAnswer: 1,
        difficulty: "dificil"
      },
      {
        id: 82,
        statement: `Leia: "O relógio parecia correr naquele dia."
        O que isso significa?`,
        options: [
          "O relógio estava quebrado",
          "O tempo passou rápido",
          "O dia foi longo",
          "O relógio caiu"
        ],
        correctAnswer: 1,
        difficulty: "dificil"
      },
      {
        id: 83,
        statement: `Leia: "Mesmo cansada, Júlia terminou o trabalho."
        Isso mostra que ela é:`,
        options: [
          "Desistente",
          "Determinada",
          "Preguiçosa",
          "Confusa"
        ],
        correctAnswer: 1,
        difficulty: "dificil"
      },
      {
        id: 84,
        statement: `Leia: "O menino olhava para o chão enquanto falava."
        Isso pode indicar:`,
        options: [
          "Alegria",
          "Confiança",
          "Vergonha",
          "Raiva"
        ],
        correctAnswer: 2,
        difficulty: "dificil"
      },
      {
        id: 85,
        statement: `Leia: "A cidade acordou debaixo d'água."
        Isso indica que:`,
        options: [
          "Houve uma enchente",
          "A cidade sumiu",
          "Todos dormiram",
          "As casas voaram"
        ],
        correctAnswer: 0,
        difficulty: "dificil"
      },
      {
        id: 86,
        statement: `Leia: "Ele prometeu estudar, mas passou a tarde jogando."
        Podemos concluir que:`,
        options: [
          "Cumpriu a promessa",
          "Não cumpriu a promessa",
          "Estudou muito",
          "Foi à escola"
        ],
        correctAnswer: 1,
        difficulty: "dificil"
      },
      {
        id: 87,
        statement: `Leia: "A mãe sorriu ao ver o desenho do filho."
        O sorriso indica:`,
        options: [
          "Tristeza",
          "Raiva",
          "Orgulho",
          "Medo"
        ],
        correctAnswer: 2,
        difficulty: "dificil"
      },
      {
        id: 88,
        statement: `Leia: "O silêncio tomou conta da sala."
        Isso significa que:`,
        options: [
          "Todos falaram",
          "Ficou barulho",
          "Todos ficaram quietos",
          "A sala ficou vazia"
        ],
        correctAnswer: 2,
        difficulty: "dificil"
      },
      {
        id: 89,
        statement: `Leia: "Ele estava nas nuvens após a vitória."
        Isso indica que ele estava:`,
        options: [
          "Muito feliz",
          "Triste",
          "Com sono",
          "Com medo"
        ],
        correctAnswer: 0,
        difficulty: "dificil"
      },
      {
        id: 90,
        statement: `Leia: "Luiza segurava o guarda-chuva mesmo sem chuva."
        Isso indica que ela:`,
        options: [
          "Esqueceu de guardar",
          "Esperava chuva",
          "Estava com frio",
          "Queria brincar"
        ],
        correctAnswer: 1,
        difficulty: "dificil"
      }
    ],

  },

  matematica: {
    numeros: [
      // Facil (91–100)
      {
        id: 91,
        statement: "Qual é o número que vem depois de 49?",
        options: ["48", "50", "51", "49"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 92,
        statement: "Qual é o antecessor de 100?",
        options: ["99", "101", "98", "102"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 93,
        statement: "Qual número é maior?",
        options: ["45", "54", "35", "44"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 94,
        statement: "Qual número está entre 67 e 69?",
        options: ["66", "68", "70", "67"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 95,
        statement: "Qual é o menor número?",
        options: ["12", "21", "15", "18"],
        correctAnswer: 0,
        difficulty: "facil",
      },
      {
        id: 96,
        statement: "Qual número é par?",
        options: ["13", "17", "22", "19"],
        correctAnswer: 2,
        difficulty: "facil",
      },
      {
        id: 97,
        statement: "Qual número é ímpar?",
        options: ["14", "18", "21", "20"],
        correctAnswer: 2,
        difficulty: "facil",
      },
      {
        id: 98,
        statement: "Quantas dezenas tem o número 70?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        difficulty: "facil",
      },
      {
        id: 99,
        statement: "Quantas unidades tem o número 34?",
        options: ["3", "4", "34", "30"],
        correctAnswer: 1,
        difficulty: "facil",
      },
      {
        id: 100,
        statement: "Qual número é maior que 100?",
        options: ["98", "99", "101", "100"],
        correctAnswer: 2,
        difficulty: "facil",
      },

  // Medio (101–110)
      {
        id: 101,
        statement: "Qual número tem 4 dezenas e 3 unidades?",
        options: ["34", "43", "24", "44"],
        correctAnswer: 1,
        difficulty: "medio",
      },
      {
        id: 102,
        statement: "Qual é o valor do algarismo 5 em 250?",
        options: ["5", "50", "500", "25"],
        correctAnswer: 1,
        difficulty: "medio",
      },
      {
        id: 103,
        statement: "Qual número é formado por 3 centenas, 2 dezenas e 1 unidade?",
        options: ["321", "312", "231", "213"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 104,
        statement: "Qual número é múltiplo de 5?",
        options: ["42", "53", "60", "47"],
        correctAnswer: 2,
        difficulty: "medio",
      },
      {
        id: 105,
        statement: "Qual número está entre 199 e 201?",
        options: ["198", "200", "202", "197"],
        correctAnswer: 1,
        difficulty: "medio",
      },
      {
        id: 106,
        statement: "Quantas centenas há em 400?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        difficulty: "medio",
      },
      {
        id: 107,
        statement: "Qual é o sucessor de 999?",
        options: ["998", "1000", "1001", "997"],
        correctAnswer: 1,
        difficulty: "medio",
      },
      {
        id: 108,
        statement: "Qual número é divisível por 2?",
        options: ["35", "47", "88", "91"],
        correctAnswer: 2,
        difficulty: "medio",
      },
      {
        id: 109,
        statement: "Qual número tem 3 ordens?",
        options: ["123", "1000", "10000", "10"],
        correctAnswer: 0,
        difficulty: "medio",
      },
      {
        id: 110,
        statement: "Qual é o maior número?",
        options: ["345", "354", "435", "543"],
        correctAnswer: 3,
        difficulty: "medio",
      },

  // Dificil (111–120)
      {
        id: 111,
        statement: "Qual é o milhar do número 3456?",
        options: ["6", "5", "4", "3"],
        correctAnswer: 3,
        difficulty: "dificil",
      },
      {
        id: 112,
        statement: "Qual número é maior que 999 e menor que 1001?",
        options: ["998", "999", "1000", "1002"],
        correctAnswer: 2,
        difficulty: "dificil",
      },
      {
        id: 113,
        statement: "Quantas unidades há em 3 centenas?",
        options: ["30", "300", "3", "33"],
        correctAnswer: 1,
        difficulty: "dificil",
      },
      {
        id: 114,
        statement: "Qual é o valor posicional do 2 em 2.345?",
        options: ["2", "20", "200", "2000"],
        correctAnswer: 3,
        difficulty: "dificil",
      },
      {
        id: 115,
        statement: "Qual número é divisível por 10?",
        options: ["43", "55", "70", "89"],
        correctAnswer: 2,
        difficulty: "dificil",
      },
      {
        id: 116,
        statement: "Qual número é composto apenas por centenas?",
        options: ["300", "320", "305", "310"],
        correctAnswer: 0,
        difficulty: "dificil",
      },
      {
        id: 117,
        statement: "Qual é o dobro de 125?",
        options: ["240", "250", "225", "260"],
        correctAnswer: 1,
        difficulty: "dificil",
      },
      {
        id: 118,
        statement: "Qual é a metade de 840?",
        options: ["410", "420", "430", "440"],
        correctAnswer: 1,
        difficulty: "dificil",
      },
      {
        id: 119,
        statement: "Qual número tem 5 milhares?",
        options: ["500", "5000", "50", "50000"],
        correctAnswer: 1,
        difficulty: "dificil",
      },
      {
        id: 120,
        statement: "Qual é o triplo de 300?",
        options: ["600", "700", "900", "800"],
        correctAnswer: 2,
        difficulty: "dificil",
      },
    ],

    operacoes: [
      // Facil (121–130)
      { 
        id: 121, 
        statement: "Quanto é 7 + 5?", 
        options: ["10", "11", "12", "13"], 
        correctAnswer: 2, 
        difficulty: "facil" 
      },
      { 
        id: 122, 
        statement: "Quanto é 15 - 6?", 
        options: ["7", "8", "9", "10"], 
        correctAnswer: 2, 
        difficulty: "facil" 
      },
      { 
        id: 123, 
        statement: "Quanto é 4 x 3?", 
        options: ["12", "11", "10", "13"], 
        correctAnswer: 0, 
        difficulty: "facil" 
      },
      { 
        id: 124, 
        statement: "Quanto é 20 ÷ 4?", 
        options: ["5", "4", "6", "3"], 
        correctAnswer: 0, 
        difficulty: "facil" 
      },
      { 
        id: 125, 
        statement: "Quanto é 9 + 8?", 
        options: ["16", "17", "18", "15"], 
        correctAnswer: 1, 
        difficulty: "facil" 
      },
      { 
        id: 126, 
        statement: "Quanto é 30 - 12?", 
        options: ["18", "19", "17", "16"], 
        correctAnswer: 0, 
        difficulty: "facil" 
      },
      { 
        id: 127, 
        statement: "Quanto é 6 x 5?", 
        options: ["30", "25", "35", "20"], 
        correctAnswer: 0, 
        difficulty: "facil" 
      },
      { 
        id: 128, 
        statement: "Quanto é 16 ÷ 2?", 
        options: ["6", "7", "8", "9"], 
        correctAnswer: 2, 
        difficulty: "facil" 
      },
      { 
        id: 129, 
        statement: "Quanto é 100 + 50?", 
        options: ["140", "150", "160", "130"], 
        correctAnswer: 1, 
        difficulty: "facil" 
      },
      { 
        id: 130, 
        statement: "Quanto é 90 - 40?", 
        options: ["40", "50", "60", "30"], 
        correctAnswer: 1, 
        difficulty: "facil" 
      },

      // Medio (131–140)
      { 
        id: 131, 
        statement: "Quanto é 24 + 36?", 
        options: ["50", "60", "70", "80"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },
      { 
        id: 132, 
        statement: "Quanto é 84 - 29?", 
        options: ["55", "56", "57", "58"], 
        correctAnswer: 0, 
        difficulty: "medio" 
      },
      { 
        id: 133, 
        statement: "Quanto é 8 x 7?", 
        options: ["54", "56", "58", "60"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },
      { 
        id: 134, 
        statement: "Quanto é 144 ÷ 12?", 
        options: ["10", "11", "12", "13"], 
        correctAnswer: 2, 
        difficulty: "medio" 
      },
      { 
        id: 135, 
        statement: "Qual é o dobro de 75?", 
        options: ["140", "150", "160", "170"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },
      { 
        id: 136, 
        statement: "Qual é a metade de 96?", 
        options: ["46", "47", "48", "49"], 
        correctAnswer: 2, 
        difficulty: "medio" 
      },
      { 
        id: 137, 
        statement: "Quanto é 125 + 275?", 
        options: ["390", "400", "410", "420"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },
      { 
        id: 138, 
        statement: "Quanto é 500 - 185?", 
        options: ["315", "320", "310", "305"], 
        correctAnswer: 0, 
        difficulty: "medio" 
      },
      { 
        id: 139, 
        statement: "Quanto é 9 x 11?", 
        options: ["98", "99", "100", "97"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },
      { 
        id: 140, 
        statement: "Quanto é 250 ÷ 5?", 
        options: ["45", "50", "55", "60"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },

      // Dificil (141–150)
      { 
        id: 141, 
        statement: "Quanto é 123 + 456?", 
        options: ["579", "580", "581", "578"], 
        correctAnswer: 0, 
        difficulty: "dificil" 
      },
      { 
        id: 142, 
        statement: "Quanto é 1000 - 375?", 
        options: ["625", "635", "645", "615"], 
        correctAnswer: 0, 
        difficulty: "dificil" 
      },
      { 
        id: 143, 
        statement: "Quanto é 25 x 12?", 
        options: ["300", "250", "275", "325"], 
        correctAnswer: 0, 
        difficulty: "dificil" 
      },
      { 
        id: 144, 
        statement: "Quanto é 360 ÷ 9?", 
        options: ["30", "35", "40", "45"], 
        correctAnswer: 2, 
        difficulty: "dificil" 
      },
      { 
        id: 145, 
        statement: "Qual é o triplo de 240?", 
        options: ["720", "710", "730", "740"], 
        correctAnswer: 0, 
        difficulty:     "dificil" 
      },
      { 
        id: 146, 
        statement: "Qual é 15% de 200? (aproximação simples)", 
        options: ["20", "25", "30", "35"], 
        correctAnswer: 2,    
        difficulty: "dificil" 
      },
      { 
        id: 147, 
        statement: "Quanto é 875 + 125?", 
        options: ["1000", "990", "1010", "1020"], 
        correctAnswer: 0, 
        difficulty:    "dificil" 
      },
      { 
        id: 148, 
        statement: "Quanto é 960 ÷ 8?", 
        options: ["110", "115", "120", "125"], 
        correctAnswer: 2, 
        difficulty: "dificil" 
      },
      { 
        id: 149, 
        statement: "Quanto é 45 x 6?", 
        options: ["260", "270", "280", "290"], 
        correctAnswer: 1, 
        difficulty: "dificil" 
      },
      { 
        id: 150, 
        statement: "Quanto é 1500 - 875?", 
        options: ["625", "635", "645", "615"], 
        correctAnswer: 0, 
        difficulty: "dificil" 
      },
    ],

    medidas: [
      // Facil (151–160)
      { 
        id: 151, 
        statement: "Quantos minutos tem 1 hora?", 
        options: ["30", "45", "60", "90"], 
        correctAnswer: 2, 
        difficulty: "facil" 
      },
      { 
        id: 152, 
        statement: "1 metro tem quantos centímetros?", 
        options: ["10", "50", "100", "90"], 
        correctAnswer: 2, 
        difficulty: "facil" 
      },
      { 
        id: 153, 
        statement: "Quanto é 500 g + 300 g?", 
        options: ["700 g", "800 g", "900 g", "600 g"], 
        correctAnswer: 1, 
        difficulty: "facil" 
      },
      { 
        id: 154, 
        statement: "Quanto tempo é 120 minutos?", 
        options: ["2 horas", "1 hora", "3 horas", "4 horas"], 
        correctAnswer: 0,    
        difficulty: "facil" 
      },
      { 
        id: 155, 
        statement: "Qual unidade mede massa?", 
        options: ["metro", "grama", "litro", "hora"], 
        correctAnswer: 1, difficulty: "facil" 
      },
      { 
        id: 156, 
        statement: "Qual unidade mede comprimento?", 
        options: ["metro", "litro", "quilo", "hora"], 
        correctAnswer: 0,     
        difficulty: "facil" 
      },
      { 
        id: 157, 
        statement: "Quantos dias tem uma semana?", 
        options: ["5", "6", "7", "8"], 
        correctAnswer: 2, 
        difficulty: "facil" 
      },
      { 
        id: 158, 
        statement: "Quantos meses tem um ano?", 
        options: ["10", "11", "12", "13"], 
        correctAnswer: 2, 
        difficulty: "facil" 
      },
      { 
        id: 159, 
        statement: "Meio litro é igual a:", 
        options: ["0,5 L", "1 L", "2 L", "5 L"], 
        correctAnswer: 0, 
        difficulty: "facil" 
      },
      { 
        id: 160, 
        statement: "2 horas equivalem a quantos minutos?", 
        options: ["100", "110", "120", "130"], 
        correctAnswer: 2,    
        difficulty: "facil" 
      },
      // Medio (161–170)
      { 
        id: 161, 
        statement: "Quantos centímetros tem 3 metros?", 
        options: ["100", "200", "300", "400"], 
        correctAnswer: 2,     
        difficulty: "medio"        
      },
      { 
        id: 162, 
        statement: "2 kg equivalem a quantos gramas?", 
        options: ["200", "2000", "20", "20000"], 
        correctAnswer: 1,    
        difficulty: "medio" 
      },
      { 
        id: 163, 
        statement: "2 horas e meia equivalem a quantos minutos?", 
        options: ["120", "130", "150", "140"], 
        correctAnswer: 2,     
        difficulty: "medio" 
      },
      { id: 164, 
        statement: "5000 g equivalem a:", 
        options: ["5 kg", "50 kg", "0,5 kg", "500 kg"], 
        correctAnswer: 0, 
        difficulty: "medio" 

      },
      { 
        id: 165, 
        statement: "1 km equivale a quantos metros?", 
        options: ["100", "500", "1000", "10000"], 
        correctAnswer: 2,    
        difficulty: "medio" 
      },
      { 
        id: 166, 
        statement: "Quantos segundos tem 1 minuto?", 
        options: ["30", "45", "60", "90"], 
        correctAnswer: 2, 
        difficulty: "medio" 
      },
      { 
        id: 167, 
        statement: "Meio metro equivale a:", 
        options: ["25 cm", "50 cm", "75 cm", "100 cm"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },
      { 
        id: 168, 
        statement: "3 litros equivalem a quantos mililitros?", 
        options: ["300", "3000", "30", "30000"], 
        correctAnswer: 1,    
        difficulty: "medio" 
      },
      { 
        id: 169, 
        statement: "Uma década tem quantos anos?", 
        options: ["5", "10", "15", "20"], 
        correctAnswer: 1, 
        difficulty: "medio" 
      },
      { 
        id: 170, 
        statement: "Um semestre tem quantos meses?", 
        options: ["4", "5", "6", "7"], 
        correctAnswer: 2, 
        difficulty: "medio" 
      },

      // Dificil (171–180)
      { 
        id: 171, 
        statement: "7500 g equivalem a quantos kg?", 
        options: ["7,5 kg", "75 kg", "0,75 kg", "750 kg"], 
        correctAnswer: 0,    
        difficulty: "dificil"        
      },
      { 
        id: 172, 
        statement: "1 hora e 45 minutos equivalem a quantos minutos?", 
        options: ["95", "100", "105", "115"], 
        correctAnswer:    2, 
        difficulty: "dificil" 
      },
      { 
        id: 173, 
        statement: "2,5 km equivalem a quantos metros?", 
        options: ["250", "2500", "25000", "25"], 
        correctAnswer: 1,    
        difficulty: "dificil" 
      },
      { 
        id: 174, 
        statement: "3 horas e 20 minutos equivalem a quantos minutos?", 
        options: ["180", "190", "200", "210"],     
        correctAnswer: 2, 
        difficulty: "dificil" 
      },
      { 
        id: 175, 
        statement: "0,5 kg equivalem a quantos gramas?", 
        options: ["50", "500", "5000", "5"], 
        correctAnswer: 1, 
        difficulty: "dificil" 
      },
      { 
        id: 176, 
        statement: "Um trimestre tem quantos meses?", 
        options: ["2", "3", "4", "5"], 
        correctAnswer: 1, 
        difficulty: "dificil" 
      },
      { 
        id: 177, 
        statement: "1,5 L equivalem a quantos ml?", 
        options: ["150", "1500", "15", "15000"], 
        correctAnswer: 1, 
        difficulty: "dificil" 
      },
      { 
        id: 178, 
        statement: "2 dias equivalem a quantas horas?", 
        options: ["24", "36", "48", "72"], 
        correctAnswer: 2, 
        difficulty: "dificil" 
      },
      { 
        id: 179, 
        statement: "250 cm equivalem a quantos metros?", 
        options: ["2,5 m", "25 m", "0,25 m", "250 m"], 
        correctAnswer: 0,    
        difficulty: "dificil" 
      },
      { 
        id: 180, 
        statement: "90 minutos equivalem a quantas horas?", 
        options: ["1 hora", "1,5 horas", "2 horas", "0,5 hora"],     
        correctAnswer: 1, 
        difficulty: "dificil"
      },
    ]
  },
};
