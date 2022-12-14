import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/Screens/HomeScreen";
import CartScreen from "./components/Screens/CartScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import ProductScreen from "./components/Screens/ProductScreen";
import RegisterScreen from "./components/Screens/RegisterScreen";
import ProfileScreen from "./components/Screens/ProfileScreen";
import UserListScreen from './components/Screens/UserListScreen'
import UserEditScreen from './components/Screens/UserEditScreen'
import ProductListScreen from './components/Screens/ProductListScreen'
import ProductEditScreen from './components/Screens/ProductEditScreen'
import EndScreen from './components/Screens/EndScreen'
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/login" component={LoginScreen} />
        <Route path="/end" component={EndScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
