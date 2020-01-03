import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

// tmp
const MONGO_URL = 'mongodb://react-user:passw0rd@localhost:27017/react-sample';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
    //
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
