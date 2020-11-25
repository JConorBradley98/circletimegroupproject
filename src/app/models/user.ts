import {UserType} from './user-type'

export interface User {
    name: string;
    email: string;
    password: string;
    userType: UserType;
}