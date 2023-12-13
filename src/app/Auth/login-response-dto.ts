import { Role } from "./role";

export interface LoginResponseDto {
    name:string;
    email:string;
    Role:Role;
    token:string
}
