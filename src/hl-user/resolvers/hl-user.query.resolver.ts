import { Resolver, Query } from '@nestjs/graphql';
import { HlUserQueryService } from '../services/hl-user.query.service';

@Resolver(() => String)
export class HlUserQueryResolver {
  constructor(private readonly hlUserQueryService: HlUserQueryService) {}

  @Query(() => String)
  hello(): string {
    return 'some';
  }
}
