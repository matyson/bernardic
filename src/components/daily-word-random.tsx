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
import { Link } from "@tanstack/react-router";

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
        <CardTitle className="text-2xl font-bold">Palavra do Dia</CardTitle>
        <CardDescription>
          {new Date().toLocaleDateString("pt-BR")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Link
          to={`/words/${wordOfTheDay?.word}`}
          className="w-fit text-lg font-bold hover:text-primary"
        >
          {wordOfTheDay?.word}
        </Link>
        <p className="text-sm text-muted-foreground">{wordOfTheDay?.type}</p>
        <p className="text-sm">{wordOfTheDay?.definition[0]}</p>
      </CardContent>
    </Card>
  );
}
