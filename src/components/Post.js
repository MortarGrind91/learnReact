import React, {Component} from 'react';
import User from "./User";

class Post extends Component{
    render(){
        return(
            <div className="post">
                <User 
                    src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" 
                    alt="cat" 
                    name="cat"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    More Text
                </div>
            </div>
        );
    }
}

export default Post;