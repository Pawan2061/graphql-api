import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
@ObjectType()




export class Posts{
    @PrimaryGeneratedColumn()
    @Field((type)=>Int)
    id:number


    
    @Column()
    @IsAlpha()
    @Field()
    name:string


    @Column()
    @Field((type)=>Int)
    userId:number


    @ManyToOne(()=>User,(user)=>user.posts)
    @Field((type)=>User)
    user:User



   

}
