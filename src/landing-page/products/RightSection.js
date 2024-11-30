import React from 'react';

function RightSection({ imgeURL, productName, productDescription, learnMore,  }) {
    return (
        <div className='containe '>
            <div className='row '>
                <div className='col-1'></div>
                <div className='col-5 p-5 mt-5'>
                    <h1 className=' mt-5'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        
                        <a href={learnMore} style={{ marginLeft: "50px" }}>Learn More</a>
                    </div>
                    
                </div>

                <div className='col-6'>
                    <img src={imgeURL} />
                </div>

            </div>
        </div>
    );
}

export default RightSection;