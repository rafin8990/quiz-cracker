import React from 'react';
import image from '../../image.png'


const Blog = () => {
    return (
        <div>
            <div className="w-full px-8 mx-auto mt-20 space-y-2 shadow sm:max-w-lg bg-gray-200 m-5">
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold text-2xl">What is the purpose of react router ?</summary>
                    <div className="mt-3">
                        <p className="text-md leading-6 text-gray-600">
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold text-2xl">
                    How does content API work?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                        Content API is a RESTful API that lets advertisers programmatically manage their Microsoft Merchant Center catalogs. Content API is an alternative to managing your catalog using the Microsoft Merchant Center web page or by using FTP/SFTP. Content API has the following advantages: <br />

                        1.Provides the ability to update product offers incrementally rather than uploading the entire data feed. Being able to update a subset of your products is more efficient than having to upload the entire feed by using FTP/SFTP.<br />

                        2.Provides the ability to make changes to product pricing and availability to reflect close to real-time market conditions. For example, if your product goes out of stock, you can quickly update its Availability field using the Content API.<br />

                        3.Provides the ability to batch together large numbers of items to process in a single request. A batch operation can include inserts, deletes, and updates. Using batch operations is a more efficient use of resources than using single operation calls (for example, a single insert operation).<br />

                        4.Provides the ability to download catalog status reports.<br />

                        5.Provides the ability to manage your catalogs programmatically.<br />
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold text-2xl">
                    What is Useref in React? How does it work?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 ">
                        The useRef Hook allows you to persist values between renders.
                        It can be used to store a mutable value that does not cause a re-render when updated.
                        It can be used to access a DOM element directly.The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.With a functional component we are using useRef instead of createRef. If you create a ref using createRef in a functional component, React will create a new instance of the ref on every re-render instead of keeping it between renders.
                        </p>
                    </div>
                </details>
                
            </div>
            
        </div>
    );
};

export default Blog;