import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreatePostInput } from "./dto/create-post.input";
import { Posts } from "./entities/post.entity";
import { PostService } from "./post.service";


@Resolver((of:any)=>Posts)
export class PostsResolver{
    constructor (private readonly postService:PostService){}


    @Query((returns)=>[Posts])
    async posts():Promise<Posts[]>{
        return await this.postService.findPosts()
    }


    @Query((returns)=>Posts)
    async post(@Args('id',{type:()=>Int})id:number):Promise<Posts>{
        return this.postService.findOne(id)

    }
    @Mutation((returns)=>Posts)
    async createPost(@Args('createPostInput')createPostInput:CreatePostInput):Promise<Posts>{
        return await this.postService.createPost(createPostInput)
        


    }
}
