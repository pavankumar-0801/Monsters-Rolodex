// import { Component } from "react";

import './search-box.styles.css';

const SearchBox = ({className, placeHolder, onChangeHandler}) => {
    
        // console.log(this.props);
        // const {onSearchChange} = this.props;
        return (
            <input
            //  className='search-box' 
            className={`search-box ${className}`}
            type='search' 
            // placeholder='Search Monsters'
            placeholder={placeHolder}
             onChange= {onChangeHandler} />
        )
    
}







// class SearchBox extends Component{
//     render(){
//         // console.log(this.props);
//         const {onSearchChange} = this.props;
//         return (
//             <input
//             //  className='search-box' 
//             className={`search-box ${this.props.className}`}
//             type='search' 
//             // placeholder='Search Monsters'
//             placeholder={this.props.placeHolder}
//              onChange= {this.props.onChangeHandler} />
//         )
//     }
// }

export default SearchBox;