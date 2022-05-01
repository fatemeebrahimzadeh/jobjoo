
import { AxiosResponse } from 'axios';
import { Dispatch } from 'react'
import { AppAction } from '../@types/store'
import { Axios } from "./axios";
import { IRanges } from '../@types/entities/ranges';
import { setRangesAction } from '../store/actions/ranges';


export const syncsDatabase = async (dispatch: Dispatch<AppAction>) => {
    let ranges = await getRanges()
    dispatch(setRangesAction(ranges))
}

const getRanges = async () => {
    let ranges = await Axios.get<any, AxiosResponse<IRanges>>('/api/data/ranges')
    return ranges.data
}