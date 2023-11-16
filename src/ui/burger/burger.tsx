import whiteBurger from "../../assets/WhiteBurger.svg";
import goldBurger from "../../assets/GoldBurger.svg";
import './burger.css'

interface BurgerProps {
  route: string;
  onOpenModalMenu: () => void;
}
const Burger: React.FC<BurgerProps> = ({ route, onOpenModalMenu }) => {
  let imagePath: string;

  switch (route) {
    case "/about":
      imagePath = whiteBurger;
      break;

    case "/contacts":
      imagePath = whiteBurger;
      break;

    default:
      imagePath = goldBurger;
  }
  return (
    <img
      className="burger-icon"
      src={imagePath}
      alt="Logo"
      onClick={onOpenModalMenu}
    />
  );
};

export default Burger;
