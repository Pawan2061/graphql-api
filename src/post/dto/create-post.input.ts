import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsNumber } from "class-validator";
@InputType()
export class CreatePostInput{
    @Field()
    @IsNumber()
    id:number


    @Field()
    @IsAlpha()
    name:string


    @Field()
    @IsNumber()
    ownerId:number


   
}