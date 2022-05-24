import { Test, TestingModule } from '@nestjs/testing';
import { FiatTransactionsService } from './fiat-transactions.service';

describe('FiatTransactionsService', () => {
  let service: FiatTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiatTransactionsService],
    }).compile();

    service = module.get<FiatTransactionsService>(FiatTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
