import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
@Prop({unique: true, required: true})
name: string

@Prop({required: true})
password: string

@Prop({required: true})
project_id: number

@Prop({required: true})
role: Role
}

enum Role {
    SuperAdmin,
    Admin,
    Client
}

export const userSchema = SchemaFactory.createForClass(User)