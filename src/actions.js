import userActionTypes from './types'

export const addUser = (userInfor) =>{
    return{
        type:userActionTypes.ADD_USER,
        payload:userInfor
    }
}


