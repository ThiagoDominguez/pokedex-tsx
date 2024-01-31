import { useNavigate, useParams } from "react-router-dom";
import style from "./poke.module.css";
import PokeballImg from "../assets/pokeball.png";
import { Footer, LoadingScreen } from "../components";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPoke } from "../api/fetchPoke";
import { waitFor } from "../utils/utils";

const Poke = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [poke, setPoke] = useState<PokemonDetails>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getPoke = async () => {
      setIsLoading(true);
      await waitFor(2000);
      const fetchPokemon = await fetchPoke(name as string);
      setPoke(fetchPokemon);
      setIsLoading(false);
    };
    getPoke();
  }, [name]);
  if (isLoading || !poke) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <button onClick={() => navigate(-1)} className={style.pokeBtn}>
        <p className={style.pokeTitle}>&#8592; </p>
        <img src={PokeballImg} alt="Pokeball" className={style.pokeBtnImg} />
        Go back
      </button>
      <div className={style.poke}>
        <main className={style.pokeInfo}>
          <div className={style.pokeTitle}>{poke?.name?.toUpperCase()}</div>
          <div className="">Nr. {poke?.id}</div>
          <div className="">
            <img
              src={poke?.imgSrc}
              alt={poke?.name}
              className={style.pokeInfoImg}
            />
          </div>
          <div className="">HP: {poke?.hp}</div>
          <div className="">ATTACK: {poke?.attack}</div>
          <div className="">DEFENSE: {poke?.defense}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Poke;
