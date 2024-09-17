import { useState } from "react";
import { Button } from "./components/ui/button";
import { DailyWordRandom } from "./components/daily-word-random";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <p className="font-custom text-xl">Bernardic</p>
        <Button variant={"default"} onClick={() => setCount(count + 1)}>
          Click me
        </Button>
        <p>{count}</p>
        <DailyWordRandom />
      </div>
    </>
  );
}

export default App;
