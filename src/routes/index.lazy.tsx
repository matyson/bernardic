import { createLazyFileRoute } from "@tanstack/react-router";
import { DailyWordRandom } from "@/components/daily-word-random";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <article className="prose">
          <h2 className="font-caveat text-center">bernardic</h2>
          <p>
            Oi, já teve aquele amigo que sempre se comunica por gírias? Pois
            bem, eu sou esse amigo. E pra facilitar pros meus amigos entenderem
            o que eu falo, eu resolvi criar esse dicionário, o meu dicionário.
          </p>
          <p>
            Bernardic vem da junção do meu sobrenome, Bernardi, com <i>dic</i>{" "}
            de dicionário. E é isso, um dicionário com as gírias que eu uso.
          </p>
          <p>
            Pra facilitar a explorar o dicionário e se familiarizar com as
            gírias, eu pretendo fazer jogos, quizzes e outras atividades
            interativas. E pra começar, que tal aprender uma palavra nova por
            dia?
          </p>
          <DailyWordRandom />
        </article>
      </div>
    </>
  );
}
