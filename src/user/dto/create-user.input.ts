import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsNumber } from "class-validator";
@InputType()
export class CreateUserInput{
    @IsAlpha()
    @Field()
    name:string

    @IsNumber()
    @Field()
    id:number
}