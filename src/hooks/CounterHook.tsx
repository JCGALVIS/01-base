import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCouner = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState<number>(5);
  const elementToAnime = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnime.current) return;

    tl.current
      .to(elementToAnime.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnime.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return { counter, elementToAnime, handleClick };
};
