export const SET_RECRUIMENTS = 'SET_RECRUIMENTS'

export interface iSETRECRUIMENTS {

    type: typeof SET_RECRUIMENTS
    payload: {
        recruiments: IRecruiment[]
    }

}

export type IRecruimentsActions = iSETRECRUIMENTS 