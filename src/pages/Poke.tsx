import { useParams } from "react-router-dom";

const Poke = () => {
  const { name } = useParams();

  return <div>{name}</div>;
};

export default Poke;
