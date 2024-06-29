import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class LookUpUserDto {
    @IsNotEmpty()
    @IsString()
    user1_id: string

    @IsNotEmpty()
    @IsString()
    user2_id: string

    @IsNotEmpty()
    @IsInt()
    project_id: number
}