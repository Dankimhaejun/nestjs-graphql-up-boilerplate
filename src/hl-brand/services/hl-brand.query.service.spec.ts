import { Test, TestingModule } from "@nestjs/testing";
import { HLBrandQueryService } from "./hl-brand.query.service";

describe("HLBrandQueryService", () => {
  let service: HLBrandQueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HLBrandQueryService],
    }).compile();

    service = module.get<HLBrandQueryService>(HLBrandQueryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
