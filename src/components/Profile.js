import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () =>{
    return(
        <div className="container profile">
            <User 
                src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" 
                alt="cat" 
                name="cat"/>
            <Palette/>
        </div>
    );
}

export default Profile;