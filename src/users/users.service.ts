import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { LookUpUserDto } from './dto/look-up.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save()
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) throw new HttpException('User not found', 404)
    return await this.userModel.findById(id)
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto)
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }

  async lookUp(lookUpUserDto: LookUpUserDto) {
    const user1 = await this.userModel.findOne({_id: lookUpUserDto.user1_id, project_id: lookUpUserDto.project_id}).exec()
    const user2 = await this.userModel.findOne({_id: lookUpUserDto.user2_id, project_id: lookUpUserDto.project_id}).exec()
    if (!user1 || !user2) {
      return false
    }
    else return true 
  }

  // const user = await this.userModel.findOne({name:id}).exec()
  //   if (!user) return 1
  //   return user
}
