export type Word = {
  id: number;
  word: string;
  definition: string;
  examples: string[];
  synonyms: string[];
  // audio: string;
};

export const words: Word[] = [
  {
    id: 1,
    word: "abandon",
    definition:
      "to leave someone or something somewhere, sometimes not returning to get that person or thing",
    examples: ["He was abandoned by his mother and left to fend for himself."],
    synonyms: [
      "desert, forsake, jilt, leave, strand, ditch, dump, leave high and dry, leave in the lurch, run out on, throw over",
    ],
  },
  {
    id: 2,
    word: "abate",
    definition: "to become less strong",
    examples: ["The storm suddenly abated."],
    synonyms: [
      "decrease, diminish, dwindle, lessen, moderate, recede, subside, wane",
    ],
  },
];
