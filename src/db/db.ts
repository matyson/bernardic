export type Word = {
  id: number;
  type: "verbo" | "substantivo" | "adjetivo" | "advérbio";
  word: string;
  definition: string[];
  examples: string[];
  synonyms: string[];
  // audio: string;
};

export const words: Word[] = [
  {
    id: 1,
    type: "adjetivo",
    word: "op",
    definition: [
      "Quando uma coisa é muito boa, excelente, maravilhosa, incrível, espetacular, etc.",
    ],
    examples: ["Esse filme é op demais!"],
    synonyms: ["forte", "bom", "incrível"],
  },
  {
    id: 2,
    type: "adjetivo",
    word: "forte",
    definition: [
      "Quando uma coisa é muito boa, excelente, maravilhosa, incrível, espetacular, etc.",
    ],
    examples: ["Esse filme é forte demais!"],
    synonyms: ["op", "bom", "incrível"],
  },
  {
    id: 3,
    type: "verbo",
    word: "chama",
    definition: [
      "Quando se está muito empolgado com algo; eleva a moral de alguém.",
    ],
    examples: ["Nossa, mandou bem! Chama!"],
    synonyms: ["vamo", "dale"],
  },
  {
    id: 4,
    type: "verbo",
    word: "vamo",
    definition: [
      "Quando se está muito empolgado com algo; eleva a moral de alguém.",
    ],
    examples: ["Nossa, mandou bem! Vamo!"],
    synonyms: ["chama", "dale"],
  },
  {
    id: 5,
    type: "adjetivo",
    word: "troll",
    definition: ["Pessoa com atitudes desagradáveis e/ou provocativas."],
    examples: ["Esse cara é um troll."],
    synonyms: ["meme", "podre", "crime"],
  },
];
