import React from 'react';
import { NavLink } from 'react-router-dom';

import wochEarth from '../../img/woch_earth.svg';
// import shopTitle from '../../img/shop_text-grey.svg';

function Home() {
    return (
        <>
            <div className='welcome-container'>

                <div className='center-block'>
                    {/* <img class='logo-full' src={wochLogoDark} alt='world of chaos' /> */}
                    <img class='logo-full' src={wochEarth} alt='world of chaos' />
                </div>
                <div className='info-block'>
                    <h4>
                        <span>There’s nothing here at the moment, but you can</span>
                        <NavLink activeClassName='active' to="/contact" className='-mb-text'>
                            <span> </span>contact us
                        </NavLink>.
                    </h4>
                </div>

                {/* <div className='block-sub-title'>
                    <img class='shop-title' src={shopTitle} alt='shop woch' height='50' />
                </div> */}

            </div>
        </>
    );
}

export default Home;
