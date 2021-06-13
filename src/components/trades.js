import React, {Component} from 'react' ;
import PostForm from '../posts/PostForm';
import PostList from '../posts/PostList';




function Trades() {
    return (
        <div>
          <section className="banner">	
            <div className="container">	
            <PostForm />	            
            <PostList />
           
          
        </div>	
      </section>
        </div>
    )
}

export default Trades
