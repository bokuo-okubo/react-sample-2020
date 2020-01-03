import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemSchema } from './item.schema';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { ItemsController } from './items.controller';

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]) ],
  providers: [ItemsService, ItemsResolver],
  controllers: [ItemsController],
})
export class ItemsModule {}
