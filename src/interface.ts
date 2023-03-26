
export interface iUser {
    name?: string,
    secondName?: string,
    email?: string,
    age?: string | number,
    id?: number | string | undefined
}



export interface userAction<T>{
    type:string,
    payload?:T
}
