// import { Component } from "react";

import Card from "../card/card.component";
import './cardlist.styles.css';



const CardList = ({monsters}) =>
    // const {monsters} = props;
(
        <div className="card-list">
            { monsters.map((monster)=>{
            // const {name, id, email} = monster;
            return(    
                <Card monster ={monster}/>

                    )})}
                    
            </div>
    );


// class CardList extends Component    {
   
//     render(){
//         // console.log(this.props.monsters)
//         console.log('render from CardList');
//         const {monsters} = this.props;

//         return (
//             <div className="card-list">
//                { monsters.map((monster)=>{
//                 // const {name, id, email} = monster;
//                 return(    
//                     <Card monster ={monster}/>

//                       )})}
                       
//               </div>
//         )
//     }
// }

export default CardList;