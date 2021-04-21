import React, {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {useHistory} from 'react-router'

//actions
import {  logoutUser } from '../../actions/AuthUserActions'

const Dashboard = () => {
    const hist = useHistory();
    const dispatch = useDispatch()

    const authUser = useSelector( state => state.authUser)
    const { loggedInUser, auth } = authUser;

    useEffect(() => {
        
        if(!auth){
            hist.push("/in")
        }

    }, [auth])


    const logout = (e) =>{
        e.preventDefault();
        dispatch(logoutUser())
    }

    return (
        <div className="dashboard">
            <h1 className="block text-4xl font-bold">Logged In : As { loggedInUser.name } </h1>
            <button className="block px-5 py-3 font-bold text-white bg-red-600" onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard