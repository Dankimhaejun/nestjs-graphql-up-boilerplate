import { Test, TestingModule } from '@nestjs/testing';

import { HlUserQueryResolver } from './hl-user.query.resolver';

import { HlUserQueryService } from '../services/hl-user.query.service';

describe('HlUserQueryResolver', () => {
  let resolver: HlUserQueryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HlUserQueryResolver, HlUserQueryService],
    }).compile();

    resolver = module.get<HlUserQueryResolver>(HlUserQueryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
