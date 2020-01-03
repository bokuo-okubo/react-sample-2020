import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) {}
  // very tmp
  @Get()
  async create(): Promise<string> {
    const item = await this.itemsService.create();
    return JSON.stringify(item);
  }
}
