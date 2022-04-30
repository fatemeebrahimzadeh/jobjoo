import { IRange } from "../../@types/entities/ranges";
import { AppAction } from "../../@types/store";
// I dont know why doesnt read this 
// import { SET_RANGES } from "../../@types/store/ranges";

export const setRangeAction = (ranges: IRange[]): AppAction => ({
    type: "SET_RANGES",
    payload: {
        ranges: ranges
    }
})