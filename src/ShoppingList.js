import React from 'react';
class ShoppingList extends React.Component{
    render() {
        let myName = 'Ilya';
        let myAge = 44;
        return <div class="colorText">
            <h1>My Name is {myName}</h1>;
            <p>My Name age is {myAge}</p>;
        </div>;
        
    }
    
}
export default ShoppingList;