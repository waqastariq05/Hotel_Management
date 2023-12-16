import React from 'react'
import Dashboard from '../Dashboard/Dashboard'

const User = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div>
            <Dashboard user={user} />
        </div>
    )
}

export default User
