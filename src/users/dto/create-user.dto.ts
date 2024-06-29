import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    role: number 

    @IsNotEmpty()
    @IsInt()
    project_id: number
}
