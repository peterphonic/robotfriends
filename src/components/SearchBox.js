import React from "react";

// SearchBox is a pure component/function, nothing is modified

const SearchBox = ({searchChange}) =>{
    return(
        <div className='pad2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder="serach robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox