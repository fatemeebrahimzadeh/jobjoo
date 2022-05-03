export const SET_RECRUIMENTS = 'SET_RECRUIMENTS'
export const SET_SELECTED_RECRUIMENT = 'SET_SELECTED_RECRUIMENT'

export interface iSETRECRUIMENTS {

    type: typeof SET_RECRUIMENTS
    payload: {
        recruiments: IRecruiment[]
    }

}

export interface iSETSELECTEDRECRUIMENT {

    type: typeof SET_SELECTED_RECRUIMENT
    payload: {
        recruiment: IRecruiment
    }

}

export type IRecruimentsActions = iSETRECRUIMENTS | iSETSELECTEDRECRUIMENT