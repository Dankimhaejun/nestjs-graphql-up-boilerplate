import { Args, Query, Resolver } from "@nestjs/graphql";
import { HLBrandInput } from "../dtos/queries/hl-brand";

import { HLBrand } from "../hl-brand.entity";

import { HLBrandQueryService } from "../services/hl-brand.query.service";

@Resolver(HLBrand)
export class HLBrandQueryResolver {
  constructor(private readonly hlBrandQueryService: HLBrandQueryService) {}

  @Query(() => HLBrand)
  async hlBrand(@Args("input") input: HLBrandInput) {
    return this.hlBrandQueryService.findOne(input);
  }
}
