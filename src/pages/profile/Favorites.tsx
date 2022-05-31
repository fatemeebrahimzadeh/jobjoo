import React, { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { Axios } from "../../utils/axios";
import { Link } from "react-router-dom";
import JobCard from "../../components/jobCard/JobCard";
import { AxiosResponse } from "axios";
import { IRecruiment } from "../../@types/entities/recruiment";

const Favorites: React.FC = () => {

    const [jobsList, setJobsList] = useState<IRecruiment[]>([])
    const [pageData, setPageData] = useState({ counts: 0, current_page: 0 })

    useEffect(() => {
        getfavaorite(1)
    });

    const getfavaorite = async (pageId: number) => {
        try {
            const token = localStorage.getItem('token')

            // const { data } = await Axios.get<any, AxiosResponse<{ page: number, pages: number, data: IRecruiment[] }>>(`/api/favourite/${pageId}`,
            const { data } = await Axios.get<any, AxiosResponse<{ page: number, pages: number, data: IRecruiment[] }>>('/api/favourite/',
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })

            console.log(data)
            setPageData({ counts: data.pages, current_page: data.page })
            setJobsList(data.data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {jobsList.map((job, i) =>
                <Link key={i} to="/recruitment" state={job} >
                    <JobCard key={i} jobDetails={job} />
                </Link>
            )}
            <Pagination sx={{ display: "flex", justifyContent: "center", margin: "10px" }}
                onChange={(event, page) => { getfavaorite(page) }}
                count={pageData.counts} />
        </>
    )
}
export default Favorites;