import PersonalDetails from "./components/PersonalDetails"
import BookingDetails from "./components/BookingDetails"
import ChooseVehicle from "./components/ChooseVehicle"
import Ticket from "./components/Ticket"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';

function App() {

  return (
    <Router>
      <Container maxWidth='sm' sx={{textAlign: "center"}}>
        <Typography component={"h3"} variant="h2" m={2} fontWeight="Bold" sx={{alignContent: "center"}}>Cab Booking App</Typography>

        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/choose-vehicle" element={<ChooseVehicle />} />
          <Route path="/booking-details" element={<BookingDetails />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
