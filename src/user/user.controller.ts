import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
   constructor(private userService: UserService){}

   @Get()
   async getAllUsers(): Promise<user[]> {
      return this.userService.findAll();
   }
   
 @Post()
 async createUser(
    @Body()
    users:CreateUserDto
 ): Promise<user>{
  return this.userService.create(users)
 }
 @Get(':id')
   async getUsers(
    @Param('id')
    id : string
   ): Promise<user> {
      return this.userService.findById(id);
   }
   @Put(':id')
   async updateUser(
    @Param('id')
    id : string,
      @Body()
      users:UpdateUserDto,
   ): Promise<user>{
    return this.userService.updateById(id,users);
   }
   @Delete(':id')
   async deleteUsers(
    @Param('id')
    id : string
   ): Promise<user> {
      return this.userService.deleteById(id);
   }
   
}
