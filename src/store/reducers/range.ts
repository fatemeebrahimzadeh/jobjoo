import { IRange } from "../../@types/entities/ranges";
import { IRangesActions } from "../../@types/store/ranges";

const initialState: IRange[] = []

export const rangeReducer = (state: IRange[] = initialState, action: IRangesActions) => {
    switch (action.type) {
        case "SET_RANGES":
            return action.payload.ranges;
    }
    return state
}