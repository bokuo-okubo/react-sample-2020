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
    return this.itemsService.create({ title: `tomato ${this.count++}`, price: 300, description: 'so sweet.', imageUrl: imageCreator(this.count)});
  }

  @Get()
  async all(): Promise<ItemType​​[]> {
    return this.itemsService.findAll();
  }
}
// tmp
const imageCreator = (num: number) => {
  const images = [
    'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw9d87c24f/Images/Product%20Images/prod500763/prod500763.jpg?sw=322&sh=380&sm=fit',
    'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/tomatoes_c_Kanawa_Studio-iStock-GettyImages-1163317374-LEDE.jpg?itok=NlkrVv1y',
    'https://fruitguys.com/wp-content/uploads/2019/04/2019-04-FOOD-tomatoes-heirloom-variety-123rf-43391467-MAIN-768x576.jpg',
  ];
  return images[num % images.length];
};
