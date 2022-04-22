import { IUser } from "../../@types/entities/user";
import { IUsersActions } from "../../@types/store/user";

const initialState: IUser[] = []

export const userReducer = (state: IUser[] = initialState, action: IUsersActions) => {

    switch (action.type) {

        case "SET_USERS":
            return action.payload.users;

        case "ADD_USER":
            return state.concat(action.payload.user);

        case "EDIT_USER":
            let users = state.map(user => user.id == action.payload.user.id ? {
                ...user,
                permissions: action.payload.user.permissions,
                userrole: action.payload.user.userrole,
                user: action.payload.user.user
            } : user)
            return users

        case "DELETE_USER":
            return state.filter(user => user.id !== action.payload.user.id);


    }
    return state
}