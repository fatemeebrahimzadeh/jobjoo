import { IRecruiment } from "../../@types/entities/recruiment";
import { IRecruimentsActions } from "../../@types/store/recruiment";

const initialState: IRecruiment[] = []

export const recruimentsReducer = (state: IRecruiment[] = initialState, action: IRecruimentsActions) => {
    switch (action.type) {
        case "SET_RECRUIMENTS":
            return action.payload.recruiments;
        case "SET_SELECTED_RECRUIMENT":
            return action.payload.selectedRecruiment;
    }
    return state
}