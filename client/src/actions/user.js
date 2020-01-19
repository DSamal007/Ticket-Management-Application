import axios from '../config/axios'
import swal from 'sweetalert'


/////////////////////
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}



///////////////////////////
export const startSetUser = (loginData,redirect) => {
    return (dispatch) => {
        axios.post('/users/login',loginData)
            .then(response=>{
                if(response.data.hasOwnProperty('errors')){
                    // alert(response.data.errors)
                    swal(`${response.data.errors}`,"","error")
                } else {
                    swal("Successfully Logged In!","","success")
                    localStorage.setItem('authToken',response.data.token)
                    dispatch(setUser(response.data.user))
                    redirect()
                    setTimeout(()=>document.location.reload(),1000)
                    
                }
            })
    }
}


////////////////////////////////////////
export const startAddUser = (registerData,redirect) => {
    return(dispatch=>{
        axios.post('/users/registration',registerData)
            .then(response=>{
                if(response.data.errors){
                    swal(`${response.data.message}`,"","error")
                } else {
                    swal("Successfully Registered!","", "success")
                    dispatch(setUser(response.data.user))
                    redirect()
                    
                }
            })
    })
}



///////////////////////////////////////////////////
export const startRemoveUser = () => {
    return(dispatch=>{
        axios.delete('/users/logout',{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response=>{
                if(response.data.errors){
                    alert(response.data.message)
                } else {
                    localStorage.clear()
                    dispatch(removeUser())
                }
            })
    })
}
