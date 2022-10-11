import React from 'react';
import image from '../../image.png'
import pic1 from '../../pic1.png'
import pic2 from '../../pic2.png'

const Blog = () => {
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col justify-center items-center border-solid border-2  border-gray-100 bg-emerald-200 p-5 rounded-sm m-3'>
                    <img className=' h-60 w-56' src={image} alt="" />
                    <h1 className='text-2xl font-bold'>Question one:</h1>
                    <h3 className='text-xl'>What is purpose of react router?</h3>
                </div>
                <div className='flex flex-col justify-center items-center border-solid border-2  border-gray-100 bg-emerald-200 p-5 rounded-sm m-3'>
                    <img className=' h-60 w-56' src={pic1} alt="" />
                    <h1 className='text-2xl font-bold'>Question two:</h1>
                    <h3 className='text-xl'>How does context API work?</h3>
                </div>
                <div className='flex flex-col justify-center items-center border-solid border-2  border-gray-100 bg-emerald-200 p-5 rounded-sm m-3'>
                    <img className=' h-60 w-56' src={pic2} alt="" />
                    <h1 className='text-2xl font-bold'>Question three:</h1>
                    <h3 className='text-xl'>What is useRef? How does it work?</h3>
                </div>
            </div>
            <div>
                <div className='border-solid border-2 border-emerald-200 rounded-lg m-5'>
                    <h1 className='text-2xl  bg-orange-600 font-bold text-white rounded-md'>Question One:What is purpose of react router?</h1>
                    <div className='border-solid border-2 border-emerald-200 '>
                        <h3 className='text-2xl'>Answer:</h3>
                        <p className="text-md text-gray-600">
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                        </p>
                    </div>
                </div>
                <div className='border-solid border-2 border-emerald-200 rounded-lg m-5'>
                    <h1 className='text-2xl  bg-orange-600 font-bold text-white rounded-md'>Question One:How does context API work?</h1>
                    <div className='border-solid border-2 border-emerald-200 '>
                        <h3 className='text-2xl'>Answer:</h3>
                        <p className="text-md text-gray-600">
                            Content API is a RESTful API that lets advertisers programmatically manage their Microsoft Merchant Center catalogs. Content API is an alternative to managing your catalog using the Microsoft Merchant Center web page or by using FTP/SFTP. Content API has the following advantages: <br />

                            1.Provides the ability to update product offers incrementally rather than uploading the entire data feed. Being able to update a subset of your products is more efficient than having to upload the entire feed by using FTP/SFTP.<br />

                            2.Provides the ability to make changes to product pricing and availability to reflect close to real-time market conditions. For example, if your product goes out of stock, you can quickly update its Availability field using the Content API.<br />

                            3.Provides the ability to batch together large numbers of items to process in a single request. A batch operation can include inserts, deletes, and updates. Using batch operations is a more efficient use of resources than using single operation calls (for example, a single insert operation).<br />

                            4.Provides the ability to download catalog status reports.<br />

                            5.Provides the ability to manage your catalogs programmatically.<br />
                        </p>
                    </div>
                </div>
                <div className='border-solid border-2 border-emerald-200 rounded-lg m-5'>
                    <h1 className='text-2xl  bg-orange-600 font-bold text-white rounded-md'>Question One:What is useRef?How Does it Work?</h1>
                    <div className='border-solid border-2 border-emerald-200 '>
                        <h3 className='text-2xl'>Answer:</h3>
                        <p className="text-md  text-gray-600">
                            The useRef Hook allows you to persist values between renders.
                            It can be used to store a mutable value that does not cause a re-render when updated.
                            It can be used to access a DOM element directly.The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.With a functional component we are using useRef instead of createRef. If you create a ref using createRef in a functional component, React will create a new instance of the ref on every re-render instead of keeping it between renders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;





