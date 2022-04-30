export const SET_RANGES = 'SET_RANGES'

export interface ISetRanges {

    type: typeof SET_RANGES
    payload: {
        ranges: IRanges
    }

}

export type IRangesActions = ISetRanges 