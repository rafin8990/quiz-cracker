import React from 'react';

const CartDetails = ({cartDetails}) => {
    const{ name,logo,total}=cartDetails
    return (
        
          <div>
              <div className='border-solid border-2  bg-gray-600'>
                <img className='' src={logo} alt="" />
                <h3 className='text-white'>Name: {name}</h3>
                <h5 className='text-white'>Total Quiz: {total}</h5>
                <button  className='text-white bg-orange-800 w-full p-2'>View Details</button>
            </div>
          </div>
            
    );
};

export default CartDetails;