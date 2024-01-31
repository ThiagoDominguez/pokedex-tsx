import Pokedex from "../assets/pokedex.png";
import style from "./loadingScreen.module.css";
const LoadingScreen = () => {
  return (
    <div className={style.loadingScreen}>
      <img src={Pokedex} alt="Pokedex" className={style.loadingScreenIcon} />
    </div>
  );
};

export default LoadingScreen;
