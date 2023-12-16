import React from 'react'

const Dashboard = ({ user }) => {
    return (
        <div className='container'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pt-10 pb-24 items-center justify-center flex-col">
                    <img className="lg:w-1/4 mb-10 object-cover rounded-full object-center" alt="hero" src="https://dummyimage.com/720x600" />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{user.name}</h1>
                        <p>{user.email}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
