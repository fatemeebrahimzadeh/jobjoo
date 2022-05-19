export interface IRecruiment {
    token: number,
    favourite: boolean,
    source: {
        id: number,
        name: string,
        logo: string,
        fa_name: string
    },
    time: Date,
    title: string,
    url: string,
    thumbnail: string,
    city: string,
    province: string,
    neighbourhood: string,
    education: string,
    gender: string,
    cooperation: string,
    salary: string,
    insurnace: string,
    category: string,
    sub_category: string,
    experience: {
        "min": number,
        "max": number
    },
    description: string
}