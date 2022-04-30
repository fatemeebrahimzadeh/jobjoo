import { IRanges } from "../../@types/entities/ranges";
import { IRangesActions } from "../../@types/store/ranges";

const initialState: IRanges[] = []

export const rangesReducer = (state: IRanges[] = initialState, action: IRangesActions) => {
    switch (action.type) {
        case "SET_RANGES":
            return action.payload.ranges;
    }
    return state
}