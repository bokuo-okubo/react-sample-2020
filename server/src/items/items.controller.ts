import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) {}
  // very tmp
  count = 0;
  @Get('create')
  async create(): Promise<ItemType​​> {
    return this.itemsService.create({ title: `tomato ${this.count++}`, price: 300, description: 'so sweet.' });
  }

  @Get()
  async all(): Promise<ItemType​​[]> {
    return this.itemsService.findAll();
  }
}
