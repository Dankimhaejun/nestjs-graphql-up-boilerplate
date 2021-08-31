import { Test, TestingModule } from '@nestjs/testing';
import { HlUserQueryService } from './hl-user.query.service';

describe('HlUserQueryService', () => {
  let service: HlUserQueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HlUserQueryService],
    }).compile();

    service = module.get<HlUserQueryService>(HlUserQueryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
