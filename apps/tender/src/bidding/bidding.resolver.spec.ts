import { Test, TestingModule } from '@nestjs/testing';
import { BiddingResolver } from './bidding.resolver';

describe('BiddingResolver', () => {
  let resolver: BiddingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiddingResolver],
    }).compile();

    resolver = module.get<BiddingResolver>(BiddingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
