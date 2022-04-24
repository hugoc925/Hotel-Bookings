import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../home/Home";
import NavigationBar from "../nav/navigation";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar>
        <Routes>
          {/* <Route exact path="/reservations" element={<ReservationsPage />} />
          <Route exact path="/room-types" element={<RoomTypesPage />} /> */}
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/reservations/create" element={<CreateReservationPage />} />
      <Route path="/reservations/edit/:id" element={<EditReservationsPage />} />
      <Route path="/room-types/create" element={<CreateRoomTypes />} />
      <Route path="/room-types/edit/:id" element={<EditRoomTypesPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </NavigationBar>
    </BrowserRouter>
  );
};

export default App;
