
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react'
import { AppAction } from '../@types/store'
import { Axios } from "./axios";
import { IUser } from '../@types/entities/user';
import { setUsersAction } from '../store/actions/user';


export const synceDatabase = async (dispatch: Dispatch<AppAction>) => {
    // let users = await getUsers()
    // dispatch(setUsersAction(users))
}

// const getUsers = async () => {
//     let _users = await Axios.get<any, AxiosResponse<IUser[]>>('/users')
//     return _users.data
// }