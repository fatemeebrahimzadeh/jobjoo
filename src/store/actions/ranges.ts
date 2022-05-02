import { IRanges } from "../../@types/entities/ranges";
import { AppAction } from "../../@types/store";
// import { SET_RANGES } from "../../@types/store/ranges";

export const setRangesAction = (ranges: IRanges): AppAction => ({
    type: "SET_RANGES",
    payload: {
        ranges: ranges
    }
})