import React from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import '../containers/App.css';

class App extends React.Component {
  
constructor(props)
{
  super(props);
  this.state = {
    robots: [],
    searchfield: '' 
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>{
   return response.json();
  }).then(users=>{
    this.setState({robots: users});
  })
  
}

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
  

}
  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length === 0)
    {
      return <h1 className="tc9*">Loading</h1>
    }else {
    return (
    <div className="tc">
    <img className="ma3" src="https://fontmeme.com/permalink/200424/808bedf456254b8648f5090830cfd365.png"></img>
    <SearchBar searchChange = {this.onSearchChange}/>
    <Scroll>
    <CardList robots = {filterRobots}/>
    </Scroll>
    </div>
    )
    }
  }
}


export default App;
