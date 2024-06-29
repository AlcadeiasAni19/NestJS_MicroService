import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt, IsOptional, IsString, isInt } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsString()
    role?: number;

    @IsOptional()
    @IsInt()
    project_id?: number
}
