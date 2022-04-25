import React, { Dispatch, Component } from "react";
import { connect } from "react-redux";
import { IUser } from "../../@types/entities/user";
import { AppAction } from "../../@types/store";
import { AddUserAction, DeletUserAction, EditUserAction } from "../../store/actions/user";
import { IAppState } from "../../store/configureStore";

interface IState {
    // states types define here
}

interface IProps {
    // props types define here
}

class Test extends Component<IProps & ILinkDispatchToProps & ILinkStateToProps, IState> {

    testReduxFunc=()=>{

        // api post

        // redux sample for using
        // this.props.ADD_USER({
        //     id: +response.data.id,
        //     user: this.state.userForm.data.username,
        //     userrole: this.state.userForm.data.userrole,
        //     permissions: permissions.map(item => item.toString()).join(','),
        //     createdate: new Date(response.data.date).toLocaleDateString(),
        //     password: this.state.userForm.data.password
        // })
    }

    render() {
        return (
            <div>hiii</div>
        );
    }
}

interface ILinkDispatchToProps {
    ADD_USER: (user: IUser) => void,
    EDIT_USER: (user: IUser) => void,
    DELETE_USER: (user: IUser) => void
}

interface ILinkStateToProps {
    users: IUser[]
}

function mapStateToProps(state: IAppState): ILinkStateToProps {
    return { users: state.users }
}

function mapDispatchtoProps(dispatch: Dispatch<AppAction>) {
    return {
        ADD_USER: (user: IUser) => { dispatch(AddUserAction(user)) },
        EDIT_USER: (user: IUser) => { dispatch(EditUserAction(user)) },
        DELETE_USER: (user: IUser) => { dispatch(DeletUserAction(user)) }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Test)