import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

const generateWords = (count: number) => {
    let genWords=Array.from({ length: count }, () => faker.word.adjective());
    let genWordsString=genWords.join(' ');
  return genWordsString.toLowerCase();;
};

const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
};

export default useWords;