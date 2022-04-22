import { IUser } from "../../@types/entities/user";
import { AppAction } from "../../@types/store";
import { SET_USERS, ADD_USER, EDIT_USER, DELETE_USER } from "../../@types/store/user.d";

export const setUsersAction = (users: IUser[]): AppAction => ({

    type: SET_USERS,
    payload: {
        users: users
    }

})

export const AddUserAction = (user: IUser): AppAction => ({

    type: ADD_USER,
    payload: {
        user: user
    }

})

export const EditUserAction = (user: IUser): AppAction => ({

    type: EDIT_USER,
    payload: {
        user: user
    }

}) 

export const DeletUserAction = (user: IUser): AppAction => ({

    type: DELETE_USER,
    payload: {
        user: user
    }

}) 