import {UserType} from './user-type'

export interface User {
    email: string;
    password: string;
    userType: UserType;
}