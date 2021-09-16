import { Switch, Route } from "react-router-dom";
import Detalhes from "./pages/Detalhes";
import Home from "./pages/Home";

function App() {
  return (
    <div className="header">
      <Switch>
        <Route path="/detalhes">
          <Detalhes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
