export const SET_RECRUIMENT = 'SET_RECRUIMENT'

export interface iSETRECRUIMENTS {

    type: typeof SET_RECRUIMENTS
    payload: {
        recruiments: IRecruiments
    }

}

export type IRecruimentsActions = iSETRECRUIMENT 