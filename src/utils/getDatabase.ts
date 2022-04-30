
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react'
import { AppAction } from '../@types/store'
import { Axios } from "./axios";
import { IRange } from '../@types/entities/ranges';
import { setRangeAction } from '../store/actions/ranges';


export const synceDatabase = async (dispatch: Dispatch<AppAction>) => {
    let renges = await getRanges()
    dispatch(setRangeAction(renges))
}

const getRanges = async () => {
    let renges = await Axios.get<any, AxiosResponse<IRange[]>>('/api/data/ranges')
    return renges.data
}