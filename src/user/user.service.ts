import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserInput } from "./dto/create-user.input";

import { User } from "./entities/user.entity";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>,

        
        
    ){}
    async createUser(createUserInput:CreateUserInput){
        const newUser= this.userRepository.create(createUserInput)
        return await this.userRepository.save(newUser)
    }
    async findAllUser(){
       return await this.userRepository.find()

        
    }
    async findOne(id:number){
        return await this.userRepository.findOneOrFail({
            where:{
                id
            }
        })
    }



}