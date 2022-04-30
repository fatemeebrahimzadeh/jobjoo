export interface IRange {
    homes: {
        name: string
        min_salary: number
        max_salary: number
        min_experience: number
        max_experience: number
        categories: string[]
        education: string
        cooperation: string
        gender: string
        insurnace: string
    }
    provinces: {
        id: number
        name: string
    }[]
}