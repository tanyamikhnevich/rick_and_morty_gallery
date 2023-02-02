import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { ICharacter, ICharactersResponse } from "types";
import { CharacterCard, Loader } from "components";

import styles from "./card-list.module.scss";

export const CardList = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [currenPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getCharacters = useCallback(async () => {
    setLoading(true);

    const response = await axios.get<ICharactersResponse>(
      `https://rickandmortyapi.com/api/character/?page=${currenPage}`
    );

    setCharacters([...characters, ...response.data.results]);
    setCurrentPage((prevState) => prevState + 1);
    setTotalCount(response.data.info.count);
    setFetching(false);
    setLoading(false);
  }, [characters, currenPage]);

  useEffect(() => {
    if (fetching && (characters.length < totalCount || totalCount === 0))
      getCharacters();
  }, [characters.length, fetching, getCharacters, totalCount]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (event: Event) => {
    const document = event.currentTarget as Document;
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      {loading && <Loader />}
    </div>
  );
};
