import "./App.css";
import Screen1 from "./UI/Screen1";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container className="SUPER-CONTAINER" maxWidth="xl">
      <Container maxWidth="lg" className="App">
        <Screen1 />
      </Container>
    </Container>
  );
}

export default App;
