import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Posts } from "src/post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User{
    
    @PrimaryGeneratedColumn()
    @Field((type)=>Int)
    id:number


    @Column()
    @Field()
    name:string
    


   @OneToMany(()=>Posts,(posts)=>posts.user)

   @Field((type)=>[Posts],{nullable:true})
   posts?:Posts[]

}

