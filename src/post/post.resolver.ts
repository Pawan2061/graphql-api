import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Posts } from "./entities/post.entity";
import { PostService } from "./post.service";


@Resolver((of)=>Posts)
export class PostsResolver{
    constructor (private readonly postService:PostService){}


    @Query((returns)=>[Posts])
    async find():Promise<Posts[]>{
        return await this.postService.findPosts()
    }


    @Query((returns)=>Posts)
    async findOne(@Args('id',{type:()=>Int})id:number):Promise<Posts>{
        return this.postService.findOne(id)

    }
}
