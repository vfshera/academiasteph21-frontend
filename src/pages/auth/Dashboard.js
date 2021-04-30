import React, {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {useHistory} from 'react-router'

import axios from 'axios'

import AdminLayout from '../../components/auth/AdminLayout'


//actions
import {  logoutUser } from '../../actions/AuthUserActions'



const Dashboard = () => {

    axios.defaults.withCredentials = true;
    
    const hist = useHistory();
    const dispatch = useDispatch()

    const authUser = useSelector( state => state.authUser)
    const { loggedInUser, auth } = authUser;

    useEffect(() => {
        
        if(!auth){
            hist.push("/in")
        }

        window.scrollTo(0,0)

        document.querySelector('title').text = 'AcademiaSteph21 | Dashboard'
        
       
    }, [auth])


    const logout = (e) =>{
        e.preventDefault();
       
        dispatch(logoutUser())
    }

   

        // window.Toast.fire({
        //     icon: 'success',
        //     title: 'T REQ PRESSED!'
        //   })
  

  

    return (
        <div className="dashboard">
            <AdminLayout>
             <div className="dash_overview">
                {loggedInUser.name}
             </div>
            </AdminLayout>
        </div>
    )
}

export default Dashboard
