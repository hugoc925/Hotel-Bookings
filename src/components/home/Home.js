import background from "../assets/hotel.jpg";
import styles from "./home.module.css";
const HomePage = () => {
  return (
    <div className={styles.Container}>
      <img src={background} alt></img>
    </div>
  );
};
export default HomePage;
