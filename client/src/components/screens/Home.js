import React from 'react'

const Home=()=>{
    return(
       <div className='home'>
           <div className='card home-card'>
              <h5> Abhishek</h5>
              <div className='card-image'>
                  <img src='https://images.unsplash.com/photo-1616463920317-2379238f6bc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2FsbCUyMHBhcGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
              </div>
              <div className='card-content'>
                  <h6>title</h6>
                  <p>This is post description</p>
                  <input type='text' placeholder='add a comment'></input>
                  <i className="material-icons">favorite</i>
              </div>
            </div>
       </div>
    );
}

export default Home;