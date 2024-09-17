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

function getDailyItem(data: Word[]) {
  const today = new Date();
  const dateString = today.toISOString().split("T")[0]; // Get the date in YYYY-MM-DD format
  const dateHash = Array.from(dateString).reduce(
    (hash, char) => hash + char.charCodeAt(0),
    0,
  ); // Simple hash function
  const index = dateHash % data.length;
  return data[index];
}

export function DailyWordRandom() {
  const [wordOfTheDay, setWordOfTheDay] = useState<Word | undefined>(undefined);

  useEffect(() => {
    setWordOfTheDay(getDailyItem(words));
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
