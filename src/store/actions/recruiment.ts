import { IRecruiment } from "../../@types/entities/recruiment";
import { AppAction } from "../../@types/store";
// import { SET_RECRUIMENTS } from "../../@types/store/recruiment";
// import { SET_SELECTED_RECRUIMENT } from "../../@types/store/recruiment";

export const setRecruimentsAction = (recruiments: IRecruiment[]): AppAction => ({
    type: "SET_RECRUIMENTS",
    payload: {
        recruiments: recruiments
    }
})

export const setSelectedRecruimentAction = (recruiment: IRecruiment): AppAction => ({
    type: "SET_SELECTED_RECRUIMENT",
    payload: {
        recruiment: recruiment
    }
})