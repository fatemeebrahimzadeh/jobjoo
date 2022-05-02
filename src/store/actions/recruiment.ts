import { IRecruiment } from "../../@types/entities/recruiment";
import { AppAction } from "../../@types/store";
// import { SET_RECRUIMENTS } from "../../@types/store/recruiment";

export const setRecruimentsAction = (recruiments: IRecruiment[]): AppAction => ({
    type: "SET_RECRUIMENTS",
    payload: {
        recruiments: recruiments
    }
})