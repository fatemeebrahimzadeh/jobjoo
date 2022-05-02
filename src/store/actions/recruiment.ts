import { IRecruiments } from "../../@types/entities/recruiment";
import { AppAction } from "../../@types/store";
// I dont know why doesnt read this 
// import { SET_RANGES } from "../../@types/store/ranges";

export const setRecruimentsAction = (recruiments: IRecruiments): AppAction => ({
    type: "SET_RECRUIMENTS",
    payload: {
        recruiments: recruiments
    }
})