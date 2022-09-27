import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
       <div className="content">
         <Switch>
           <Route path="/" component = {Home} exact></Route>
           <Route path="/create" component = {Create}></Route>
           <Route path="/blogs/:id" component = {BlogDetails}></Route>
           <Route path="*">
             <NotFound />
           </Route>
         </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
