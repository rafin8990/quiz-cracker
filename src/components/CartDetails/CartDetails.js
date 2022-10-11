import React from 'react';
import { Link } from 'react-router-dom';

const CartDetails = ({cartDetails}) => {
    const{id, name,logo,total}=cartDetails
    return (
        
          <div>
              <div className='border-solid border-2  bg-emerald-200'>
                <img className='' src={logo} alt="" />
                <h3 className='text-black'>Name: {name}</h3>
                <h5 className='text-black'>Total Quiz: {total}</h5>
                <Link to={`/CartDetails/${id}`}>  <button  className='text-white bg-orange-600 hover:bg-orange-700 w-full p-2'>View Details</button></Link>
            </div>
          </div>
            
    );
};

export default CartDetails;