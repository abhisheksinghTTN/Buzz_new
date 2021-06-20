import React from 'react'

const Profile=()=>{
    return(
        <div style={{maxWidth:'800px',margin:'0px auto'}}>
            <div style={{display:'flex',justifyContent:'space-around',margin:'18px opx',borderBottom:'2px solid grey'}}>
                <div>
                    <img style={{width:"160px",height:'160px',borderRadius:'80px'}} 
                      src="https://images.unsplash.com/photo-1612417783135-89e4571fe8e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  
                    />
                </div>
                <div>
                    <h5>Abhishek Singh</h5>
                    <div>
                        <h6>237 friends</h6>
                    </div>
                </div>
            </div>
            <h3> Gallery </h3>
            <div className='gallery'>
                <img className='item' src="https://images.unsplash.com/photo-1612417783135-89e4571fe8e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className='item' src="https://images.unsplash.com/photo-1612417783135-89e4571fe8e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className='item' src="https://images.unsplash.com/photo-1612417783135-89e4571fe8e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className='item' src="https://images.unsplash.com/photo-1612417783135-89e4571fe8e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className='item' src="https://images.unsplash.com/photo-1612417783135-89e4571fe8e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className='item' src="https://images.unsplash.com/photo-1612417783135-89e4571fe8e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div>
    );
}

export default Profile;