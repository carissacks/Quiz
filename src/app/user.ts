export class User {
    id: number;
    fname: string;
    gender: string;
    lname: string;
    nim: string;
    password: string;
    username: string;
}

export interface User {
    username: string;
    password: string;
}
