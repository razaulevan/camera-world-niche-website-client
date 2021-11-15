import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Home/Products/Products';
import Explore from './Pages/Home/Explore/Explore';
import Accesories from './Pages/Home/Accesories/Accesories';

import Home from './Pages/Home/Home/Home';
import NottFound from './Pages/Notfound/NottFound';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import Authprovider from './contexts/AuthProvider/Authprovider';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details/Details';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ShowReview from './Pages/ShowReview/ShowReview';
import Review from './Pages/Dashboard/Review/Review';
import UpdateUser from './Pages/Dashboard/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Authprovider>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>

            </Route>
            <Route path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>


            <Route path="/explore">
              <Explore></Explore>
              <Footer></Footer>

            </Route>
            <Route path="/reviews">
              <Review></Review>
              <Footer></Footer>

            </Route>
            <Route path="/orders/update/:id">
              <UpdateUser></UpdateUser>
            </Route>


            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
              <Footer></Footer>

            </Route>
            <Route path="/register">
              <Register></Register>
              <Footer></Footer>

            </Route>
            <PrivateRoute path="/details/:cameraid">
              <Details></Details>
              <Footer></Footer>

            </PrivateRoute>
            <Route path="*">
              <NottFound></NottFound>
            </Route>
          </Switch>

        </BrowserRouter>
      </Authprovider>


    </div>
  );
}

export default App;
