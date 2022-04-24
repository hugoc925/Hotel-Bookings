import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>Hotel Bookings</h1>
        </div>
        <div className={styles.ReservationLink}>
          <NavLink
            className={(navigationData) =>
              navigationData.isActive ? styles.active : null
            }
            to="/reservations"
          >
            Reservations
          </NavLink>
        </div>
        <div className={styles.RoomTypesLink}>
          <NavLink
            className={(navigationData) =>
              navigationData.isActive ? styles.active : null
            }
            to="/room-types"
          >
            Room Types
          </NavLink>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default NavigationBar;
