export const SET_RECRUIMENTS = 'SET_RECRUIMENTS'
export const SET_SELECTED_RECRUIMENT = 'SET_SELECTED_RECRUIMENT'

export interface ISETRECRUIMENTS {

    type: typeof SET_RECRUIMENTS
    payload: {
        recruiments: IRecruiment[]
    }

}

export interface ISETSELECTEDRECRUIMENT {

    type: typeof SET_SELECTED_RECRUIMENT
    payload: {
        selectedRecruiment: IRecruiment
    }

}

export type IRecruimentsActions = ISETRECRUIMENTS | ISETSELECTEDRECRUIMENT