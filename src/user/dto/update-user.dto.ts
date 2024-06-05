import { Role } from "../schema/user.schema"



export class UpdateUserDto{
    readonly name : string
    readonly email: string
    readonly role : Role
}