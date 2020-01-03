import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { ItemType } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
// import { ItemInput } from './input-items.input';

// very tmp

@Injectable()
export class ItemsService {
  private count = 0;

  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  // very tmp.
  async create(): Promise<Item> {
    const createdItem = new this.itemModel({ title: `title: count ${this.count++}`});
    return await createdItem.save();
  }
}
