import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LookUpUserDto } from './dto/look-up.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', 404)
    }
    return user
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Post()
  async sendMessage(@Request() request: Request) {
    //* send to microservice
  }

  @Get()
  async lookUp(@Body() lookUpUserDto: LookUpUserDto) {
    return this.usersService.lookUp(lookUpUserDto)
  }
}
