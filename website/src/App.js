import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import HowItWorks from "./components/pages/HowItWorks";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/how-it-works" exact component={HowItWorks} />
					<Route path="/about" exact component={About} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
