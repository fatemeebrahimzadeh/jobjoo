import { IUser } from "../entities/user";

export const SET_USERS = 'SET_USERS'
export const ADD_USER = 'ADD_USER'
export const EDIT_USER = 'EDIT_USER'
export const DELETE_USER = 'DELETE_USER'


export interface ISetUsers {

    type: typeof SET_USERS
    payload: {
        users: IUser[]
    }

}

export interface IAddUser {

    type: typeof ADD_USER
    payload: {
        user: IUser
    }

}

export interface IEditUser {

    type: typeof EDIT_USER
    payload: {
        user: IUser
    }

}

export interface IDeleteUser {

    type: typeof DELETE_USER,
    payload: {
        user: IUser
    }

}

export type IUsersActions = ISetUsers | IAddUser | IEditUser | IDeleteUser