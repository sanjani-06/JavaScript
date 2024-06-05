import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Role {
   INTERN='intern',
   UI='ui',
   UX='ux',
}

@Schema({
    timestamps:true
})
export class user {
    @Prop()
    name: string;

    @Prop()
    email: string;
   
    @Prop()
    role:Role
}

export const UserSchema = SchemaFactory.createForClass(user)