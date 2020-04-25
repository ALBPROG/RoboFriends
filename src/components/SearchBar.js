import React from 'react';


const searchBar = ({searchfield, searchChange}) => {
    return (<div>
        <input 
        className="pa3 mb3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="Search Robot" 
        onChange={searchChange}   
        />
    </div>)
}

export default searchBar;