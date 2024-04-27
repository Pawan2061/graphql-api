import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { Posts } from './post/entities/post.entity';
import { PostsModule } from './post/post.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';






@Module({
  imports: [
    UserModule,
    
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      playground:true,
      sortSchema:true,
      autoSchemaFile:join(process.cwd(),'src/schema.gql')
      }),
    TypeOrmModule.forRoot({
      type:'postgres',
      port:5432,

      host:"localhost",


      username:"postgres",
      password:'postgres',
      database:"graphql",
      synchronize:true,
      entities:[User,Posts]


    }),
    PostsModule
  
    

  
  ],
  
  providers: [AppService],
})
export class AppModule {}
