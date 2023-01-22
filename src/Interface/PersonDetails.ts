import { Role } from "./Roles";

export interface Person {
    id: number,
    role: Role,
    password: string,
    firstname: string,
    lastname: string,
    middlename?: string,
    email: string,
    phone: number,
}