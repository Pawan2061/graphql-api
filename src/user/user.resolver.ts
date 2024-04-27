import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/create-user.input";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";
@Resolver(()=>User)
export class UserResolver{
    constructor(private readonly userService:UserService){}
    @Mutation(()=>User)
    createUser(@Args('createUserInput') createUserInput:CreateUserInput){
        return this.userService.createUser(createUserInput)
        
    }
    @Query(()=>[User],{name:"user"})

    findAll(){
        return this.userService.findAllUser()

    }


    @Query(()=>User,{name:'user'})
    findOne(@Args('id',{type:()=>Int})id:number){
        return this.userService.findOne(id)
        




        
    }






   

   

   


}

