import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddCommentComponent from "./components/DisplayPostPage/addCommentComponent";
import Header from "./components/HeaderComponent/Header";
import PostComponent from "./components/homePage/posts";

import Login from "./components/loginPage/login";
import Signup from "./components/signupPage/signupForm";

function App() {
  return (
    <div className="body">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <PostComponent></PostComponent>
          </Route>
           <Route exact path="/addComment">
           <Header></Header>
            <AddCommentComponent></AddCommentComponent>
          </Route>
         {/* <Route exact path="/signup">
            <Signup></Signup> 
          </Route>*/}
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
