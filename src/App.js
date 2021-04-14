import "./assets/css/bundle.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import PostDetailPage from "./pages/PostDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

import store from "./store";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="wrapper-content">
          <Header />
          <Switch>
            <Route path="/post-detail/:slug"><PostDetailPage /></Route>
            <Route path="/search/:search_query"><SearchPage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route exact path="/"><HomePage /></Route>
            <Route><NotFoundPage /></Route>
          </Switch>
          <div className="spacing" />
          <Footer />
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
