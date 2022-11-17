import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import './App.css';


// This is a smart component.  A containing component that
// has states, lifecycle hooks, class syntax.

// App is not pure (javascript definition), because it modifies state.
//Its impossible to have just pure functions.

// Ony container component(smart component) can change the state

function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    //useEffect is run every time App is run.  When App renders, the side effect is run.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => setRobots(users))
    },[]); // THe parameter is to tell useEffect when to stop the rendering.  the setRobot make App to render infinitly
            // By having [] is a shortcut to componentDidMount.  Will be call only once.

    const onSearchChange = (event) => {
        //setState is a react method to change the state
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

        //destructuring
        //const {robots, searchfield} = this.state;

    return !robots.length
        ? <h1>Loading....</h1>
        :(
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
}

export default App;
