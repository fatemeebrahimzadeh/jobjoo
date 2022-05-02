import { IRecruiments } from "../../@types/entities/recruiment";
import { IRecruimentsActions } from "../../@types/store/recruiment";

const initialState: IRecruiments[] = []

export const recruimentReducer = (state: IRecruiments[] = initialState, action: IRecruimentsActions) => {
    switch (action.type) {
        case "SET_RECRUIMENTS":
            console.log(action.payload.recruiment)
            return action.payload.recruiment;
    }
    return state
}