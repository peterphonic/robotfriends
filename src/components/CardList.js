import React  from "react";
import Card from "./Card";

// CardList is a pure component/function, nothing is modified

//When doing a loop we have to give a unique key, otherwise, react wouldnt know which card to remove if we
//ever add something to remove a card -> key={user.id}
const CardList = ({robots}) => {
    // const cardArray = robots.map(user =>{
    //     return <Card key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}/>
    // })
    //map is a loop that go over each value and pass it to the Card component
    return(
        <div>
            {
                robots.map(user =>{
                    return (
                        <Card 
                            key={user.id} 
                            id={user.id} 
                            name={user.name} 
                            username={user.username} 
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;