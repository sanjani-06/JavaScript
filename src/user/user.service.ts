import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { user } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(user.name)
    private userModel:mongoose.Model<user>
  ){}

  async findAll(): Promise<user[]>{
    const users = await this.userModel.find()
    return users
  }
  async create(user: user): Promise<user>{
    const res = await this.userModel.create(user)
    return res
  }
  async findById(id: string): Promise<user>{
    const user = await this.userModel.findById(id);
    if(!user){
      throw new NotFoundException('User Not Found');
    }
    return user
  }
  async updateById(id: string,user:user): Promise<user>{
    return await this.userModel.findByIdAndUpdate(id,user,{
      new:true, 
      runValidators: true,
    });
  
  }
  async deleteById(id: string): Promise<user>{
    return await this.userModel.findByIdAndDelete(id);
    }
  
  
}
