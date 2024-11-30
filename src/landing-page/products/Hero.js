import React from 'react';

function Hero() {
    return ( 
       <div className='container border-bottom mb-5'>
            <div className='row mt-5 p-5 text-center '>
                <h1 className='mt-2' style={{fontSize:"50px"}}>Zerodha Products</h1>
                <h3 className='mt-2 text-muted' style={{fontSize:"22px"}}>Sleek, modern, and intuitive trading platforms</h3>
                <h4 className='mt-2 text-muted' style={{fontSize:"18px"}}>Check out our <a style={{textDecoration:"none"}}>investment offerings →</a></h4>
            </div>
       </div>
     );
}

export default Hero;