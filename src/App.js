import {BrowserRouter as Router , Route,Switch,Redirect} from "react-router-dom"
import NavBar from "./components/Navbar/navbar";
import Products from "./components/Products/Products";
import Counter from "./components/Counter/counter";

import Notfound from "./components/NotFound/Notfound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Todo from "./components/todoApp/todo";
import Login from "./components/Formik/Login/Login";
import Register from "./components/Formik/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/products" exact component={Products} /> 
          <Route path="/ProductDetails/:id" exact component={ProductDetails} /> 
          <Route path="/counter" component={Counter} />
          <Route path="/todo" component={Todo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/Not-found" component={Notfound} />
          <Redirect to="/not-found" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
