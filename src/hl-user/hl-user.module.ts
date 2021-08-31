import { Module } from '@nestjs/common';
import { HlUserQueryResolver } from './resolvers/hl-user.query.resolver';
import { HlUserQueryService } from './services/hl-user.query.service';

@Module({
  providers: [HlUserQueryResolver, HlUserQueryService],
})
export class HlUserModule {}
