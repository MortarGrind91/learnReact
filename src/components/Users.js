import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';

class Users extends Component{
    instaService = new InstaService();

    state = {
        users: [],
        error: false
    }

    componentDidMount(){
        this.updateUsers();
    }

    updateUsers(){
        this.instaService.getAllUsers()
        .then(this.onLoadUsers)
        .catch(this.onError);
    }

    onError = (err) =>{
        this.setState({
            error: true
        });
    }

    onLoadUsers = (users) =>{
        this.setState({
            error: false,
            users
        });
    }

    renderItems(arr){
        return arr.map(item => {
            const {name, photo, altname, userId} = item;
  
            return(
                <div key={userId}>
                    <User
                        src={photo} 
                        alt={altname} 
                        name={name}
                        min/>
                </div>
            )
        });
    }

    render(){

        const {error, users} = this.state;

        if(error){
            return <ErrorMessage/>
        }

        const user = this.renderItems(users);

        return(
            <div className="right">
                <User 
                    src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" 
                    alt="cat" 
                    name="cat"/>

                <div className="users__block">
                    {user}
                </div>

            </div>
        )
    }
}

export default Users;