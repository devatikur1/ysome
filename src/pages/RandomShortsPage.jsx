import { MoveDown, MoveUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RandomShortsPage() {
  const [parentHeight, setParentHeight] = useState(window.innerHeight);
  const [index, setIndex] = useState(100);
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setParentHeight(window.innerHeight);
      setIndex(200);
    };

    // call
    handleResize();

    // add listener
    window.addEventListener("resize", handleResize);

    // cleanup
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (id !== ":id") return;
    const unsubscribe = () => {
      console.log("ggg");
    };

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      style={{ height: `${parentHeight - 60}px` }}
      className="relative flex justify-center items-center overflow-hidden"
    >
      <section className="w-full h-full bg-surface rounded-xl">ff</section>
      <section className="w-auto absolute right-2 h-full flex gap-3 flex-col items-center justify-center rounded-xl">
        <div className="w-[60px] h-[60px] bg-bg-pecondary hover:bg-bg-Primary hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center">
          <MoveUp size={25} strokeWidth={2} />
        </div>

        <div className="w-[60px] h-[60px] bg-bg-pecondary hover:bg-bg-Primary hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center">
          <MoveDown size={25} strokeWidth={2} />
        </div>
      </section>
    </main>
  );
}
