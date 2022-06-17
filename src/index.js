
import { render } from "react-dom";
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./component/pages/login";
import Register from "./component/pages/register";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import UserProfile from "./component/pages/userProfile";
import actions from "./redux/auth/actions";
import PeopleList from "./component/pages/peopleList";
import FollowingPeopleList from "./component/pages/FollowingPeopleList";
import PeopleProfile from "./component/pages/PeopleProfile";
import FollowersPeopleList from "./component/pages/followersPeopleList";

import Loader from "./component/common/loader";
import PeoplefollowersPeopleList from "./component/pages/PeoplefollowersPeopleList";
import PeopleFollowingPeopleList from "./component/pages/PeopleFollowingPeopleList";
import UserPost from "./component/pages/userPost";
import Messenger from "./component/pages/messenger";
const rootElement = document.getElementById("root");

if (localStorage.getItem('token')) {

  store.dispatch({
    type: actions.GET_VERIFY_TOCKET,
    payload: localStorage.getItem('token')
  });
  store.dispatch({
    type: actions.SET_AUTHETICATRION,
    payload:  true 
  });

};
render(
  <div className="app-body">

  
  <Provider store={store}>
  <Loader/>
    <Router >
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/UserProfile" component={UserProfile} />
        <PrivateRoute exact path="/PeopleList" component={PeopleList} />
        <PrivateRoute exact path="/FollowersPeopleList" component={FollowersPeopleList} />
        <PrivateRoute exact path="/FollowingPeopleList" component={FollowingPeopleList} />
        <PrivateRoute exact path="/People-FollowersPeopleList" component={PeoplefollowersPeopleList} />
        <PrivateRoute exact path="/People-FollowingPeopleList" component={PeopleFollowingPeopleList} />
        {/* <PrivateRoute exact path="/User-Post" component={UserPost} /> */}
        <PrivateRoute exact path="/PeopleProfile" component={PeopleProfile} />
        {/* <PrivateRoute exact path="/messanger" component={Messenger} /> */}
      </Switch>
    </Router>
  </Provider>
  </div>,
  rootElement
);