import { Container } from "@mui/material";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
function App() {
  return (
    <Container maxWidth='lg' disableGutters>
      <Navbar/>
      {/* Banner */}
      <Banner/>
      {/* Posts */}
      <Posts/>
    </Container>
  );
}

export default App;
