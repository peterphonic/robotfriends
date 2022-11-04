import React from "react";

// Quand on crée un tag avec lettre majuscule (comme Scroll)
// react ajoute automatiquement l'objet children a props
const Scroll = (props) => {
    return (
        //Dans le return ici (JSX) :
        // {} est une expression javascript
        // {{}} Un double curly bracket represente un objet dans mon expression javascirpt.  Cela peut etre un style css
        //overflowY : we have to caml case in JSX in css = overflow-y
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '900px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;