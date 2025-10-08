import React from 'react';

const NotFound = () => {
    return (
        <>
            <section className="container mx-auto px-4 py-16 flex items-center">

                <div className="w-full">
                    <h1 className="text-4xl font-bold mb-6 text-red-500">Page Not Found</h1>
                    <p className="text-lg text-gray-700 mb-6">Discover amazing features and unparalleled support to help
                        you achieve your goals. Join us today and be part of an exciting journey.</p>
                    <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Get
                        Started</a>
                </div>
            </section>
        </>
    )
};
export default NotFound;