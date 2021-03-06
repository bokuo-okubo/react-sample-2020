import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/item.dto';
import { ItemInput } from './create-items.input';

// result => https://gyazo.com/e5108b86ac240372b9a5e1ff64cdfda5
@Resolver('Items')
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [ItemType])
  async items(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Query(() => ItemType)
  async item(@Args('id') id: string): Promise<ItemType> {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemType> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ItemType)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: ItemInput,
  ): Promise<ItemType> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ItemType)
  async deleteItem(@Args('id') id: string): Promise<ItemType> {
    return this.itemsService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
