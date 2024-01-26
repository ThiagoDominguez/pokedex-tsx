import { Link } from "react-router-dom";
import PikachuPic from "../assets/pikachu.png";
import PokemonPic from "../assets/pokeball.svg";
import LocationPic from "../assets/pointer.png";

import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link to={"/pokemons"} className={style.footerLink}>
        <img src={PikachuPic} alt="" className={style.footerIcon} />
        Pokemons
      </Link>
      <Link to={"/pokemons"} className={style.footerLink}>
        <img src={PokemonPic} alt="" className={style.footerIcon} />
        Items
      </Link>
      <Link to={"/pokemons"} className={style.footerLink}>
        <img src={LocationPic} alt="" className={style.footerIcon} />
        Location
      </Link>
    </footer>
  );
};

export default Footer;
