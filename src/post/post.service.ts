import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserInput } from "src/user/dto/create-user.input";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Posts } from "./entities/post.entity";
@Injectable()
export class PostService{
    constructor(
        @InjectRepository(Posts) private postRepository:Repository<Posts>,
        private userService:UserService,
    ){}

    async createPost(createUserInput:CreateUserInput):Promise<Posts>{

        const newPost= this.postRepository.create(createUserInput)

        return await this.postRepository.save(newPost)


    }

    async findPosts():Promise<Posts[]>{

        return  this.postRepository.find()
    }

    async findOne(id:number):Promise<Posts>{
        return this.postRepository.findOne({
            where:{
                id

            }

        })

         
    }
    async getOwnerId(id:number){
        return await this.userService.findOne(id)
    }

}