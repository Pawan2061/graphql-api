import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/user/user.module";
import { Posts } from "./entities/post.entity";
import { PostsResolver } from "./post.resolver";
import { PostService } from "./post.service";



@Module({
    imports:[TypeOrmModule.forFeature([Posts]),UserModule],
    providers:[PostsResolver,PostService],

    
})  


export class PostsModule{}