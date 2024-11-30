import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <div className='Container'>
            <div className='row p-3 mt-5 '>
                <h1 className='text-center mt-5 border-top'>People</h1>
            </div>
            <div className='row p-3 fs-6 text-muted ' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-5 text-center'>
                    <img src='Media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"50%"}}/>

                    <h4 className='fs-4 mt-5'>Nithin Kamath</h4>
                    <h6 className='fs-5 '>Founder, CEO</h6>
                </div>
                <div className='col-6 p-3'>
                    <p> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <Link to="/">Homepage</Link> / <Link>TradingQnA</Link> / <Link>Twitter</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Team;