
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react'
import { AppAction } from '../@types/store'
import { Axios } from "./axios";
import { IRanges } from '../@types/entities/ranges';
import { setRangesAction } from '../store/actions/ranges';


export const synceDatabase = async (dispatch: Dispatch<AppAction>) => {
    let renges = await getRanges()
    dispatch(setRangesAction(renges))
}

const getRanges = async () => {
    let renges = await Axios.get<any, AxiosResponse<IRanges>>('/api/data/ranges')
    return renges.data
}