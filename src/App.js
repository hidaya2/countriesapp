import {Switch,Route} from "react-router-dom"
import Countries from "./pages/Countries";
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Details from "./pages/Details"
function App() {
  return (
    <main>
      <NavBar/>
       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/countries" component={Countries}/>
         <Route path="/details/:name" component={Details}/>
       </Switch>
    </main>
  );
}

export default App;
