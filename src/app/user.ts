export class User {
    id: number;
    fName: string;
    gender: string;
    lName: string;
    nim: string;
    password: string;
    username: string;
}

export interface User {
    username: string;
    password: string;
}
