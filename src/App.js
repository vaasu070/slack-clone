import "./app.css";
import Header from "./Header";

import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, _] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>{" "}
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
