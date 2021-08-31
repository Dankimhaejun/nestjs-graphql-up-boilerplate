import { Test, TestingModule } from "@nestjs/testing";

import { HLBrandQueryResolver } from "./hl-brand.query.resolver";

import { HLBrandQueryService } from "../services/hl-brand.query.service";

describe("HLBrandQueryResolver", () => {
  let resolver: HLBrandQueryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HLBrandQueryResolver, HLBrandQueryService],
    }).compile();

    resolver = module.get<HLBrandQueryResolver>(HLBrandQueryResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
