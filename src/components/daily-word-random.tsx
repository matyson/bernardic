"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { words, type Word } from "@/db/db";

const getWordOfTheDay = () => {
  const today = new Date().toDateString();

  // Simple hash function to convert date string to number
  const hash = today.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Use the hash to seed the random number generator
  let seed = hash;
  const rng = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  // Select a random word using the seeded random number generator
  const randomIndex = Math.floor(rng() * words.length);
  return words[randomIndex] || words[0]; // Fallback to first word if randomIndex is out of bounds
};

export function DailyWordRandom() {
  const [wordOfTheDay, setWordOfTheDay] = useState<Word | undefined>(undefined);

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay());
  }, []);

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Word of the Day</CardTitle>
        <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="mb-2 text-xl font-semibold">{wordOfTheDay?.word}</h2>
        <p className="text-gray-600">{wordOfTheDay?.definition}</p>
      </CardContent>
    </Card>
  );
}
