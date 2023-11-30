import React from 'react'

import {Link} from 'react-router-dom';
export const Navbar = () => {
    return (

<div className='header'>

<div className='options'>
<Link className='option' to='/shop'>
    Buy
</Link>
<Link className='option' to='/shop'>
    Sell
</Link>

</div>

</div>
    )

}



export default Navbar;
