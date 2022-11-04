import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import Scroll from "./Scroll"
import './App.css';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield: ''
        }
    }

    //Following function part of react.  = and => not needed
    // Check https://reactjs.org/docs/react-component.html to understand
    // the order of method called by react when you load the web page
    componentDidMount(){
        //fetch is a method that belongs to the window object.
        //in the chrome dev console, just type 'windows'
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => this.setState({robots:users}));
    }


    //Because I am in react, I have to add = and => in  my method
    //declaration, otherwise, the keyword "this" will refer the the html input.
    //by adding = and => this refers to App.  This trick is not needed
    //for the constructor and for render
    onSearchChange = (event) => {
        //setState is a react method to change the state
        this.setState({searchfield: event.target.value})
    
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading....</h1>
        }else{
            return(
                    <div className='tc'>
                        <h1 className='f2'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>
            );
        }
    }
}

export default App;
