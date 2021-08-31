import { Module } from "@nestjs/common";

import { HLBrandQueryResolver } from "./resolvers/hl-brand.query.resolver";

import { HLBrandQueryService } from "./services/hl-brand.query.service";

@Module({
  providers: [HLBrandQueryResolver, HLBrandQueryService],
})
export class HLBrandModule {}
