import React from 'react';
import axios from 'axios';
import Card from './Card';
import './index.css'


// const followersArray = ['https://github.com/neel7777', 'https://api.github.com/users/reidysj', 'https://api.github.com/users/zahidkhawaja', 'https://api.github.com/users/cybersck', 'https://api.github.com/users/biskoi', 'https://api.github.com/users/artmang'];

class App extends React.Component {
  state = {
    mine: [],
    users: [],
    search: '',
    searchedUsers: []
    
    
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/neel7777')
      .then(res => {
        console.log(res.data)
        this.setState({
          mine: res.data
        });
      })
      .catch(err => console.log(err.message));
    axios
      .get('https://api.github.com/users/neel7777/followers')
      .then(res => {
        // console.log(res.data)
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err.message));
  }

  handleInputChange = event => {
    this.setState({
      search: (event.target.value)
    });
    
  };

  componentDidUpdate() {
    axios
    .get('https://api.github.com/users/neel7777/followers')
    .then(res => {
      console.log(res.data)
      const ppl = res.data.filter(user => {
        console.log('this is the user', user)
        user.login.toLowerCase().includes(this.search.toLowerCase())
      });
      this.setState({
        users: ppl
      });
    })
    .catch(err => console.log(err.message));
  }

  

  render() {
    return (
      <div className="App">
        <h1>Github Usercard</h1>   
        <form>
        <input
          type="text"
          name="item"
          onChange={this.handleInputChange}
          value={this.state.search}
          
        />
        
        </form>     
        <div>
          <Card info={this.state.mine}/>
          {this.state.users.map(user => (
          <Card key={user.id} info={user}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
