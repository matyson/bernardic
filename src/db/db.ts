export type Word = {
  id: number;
  type: "verb" | "noun" | "adjective" | "adverb";
  word: string;
  definition: string[];
  examples: string[];
  synonyms: string[];
  // audio: string;
};

export const words: Word[] = [
  {
    id: 1,
    type: "adjective",
    word: "op",
    definition: [
      "Quando uma coisa é muito boa, excelente, maravilhosa, incrível, espetacular, etc.",
    ],
    examples: ["Esse filme é op demais!"],
    synonyms: ["forte", "bom", "incrível"],
  },
  {
    id: 2,
    type: "adjective",
    word: "forte",
    definition: [
      "Quando uma coisa é muito boa, excelente, maravilhosa, incrível, espetacular, etc.",
    ],
    examples: ["Esse filme é forte demais!"],
    synonyms: ["op", "bom", "incrível"],
  },
  {
    id: 3,
    type: "verb",
    word: "chama",
    definition: [
      "Quando se está muito empolgado com algo; eleva a moral de alguém.",
    ],
    examples: ["Nossa, mandou bem! Chama!"],
    synonyms: ["vamo", "dale"],
  },
  {
    id: 4,
    type: "verb",
    word: "vamo",
    definition: [
      "Quando se está muito empolgado com algo; eleva a moral de alguém.",
    ],
    examples: ["Nossa, mandou bem! Vamo!"],
    synonyms: ["chama", "dale"],
  },
  {
    id: 5,
    type: "adjective",
    word: "troll",
    definition: ["Pessoa com atitudes desagradáveis e/ou provocativas."],
    examples: ["Esse cara é um troll."],
    synonyms: ["meme", "podre", "crime"],
  },
];
