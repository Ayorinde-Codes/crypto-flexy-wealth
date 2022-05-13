import { Test, TestingModule } from '@nestjs/testing';
import { CryptoTransactionsService } from './crypto-transactions.service';

describe('CryptoTransactionsService', () => {
  let service: CryptoTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoTransactionsService],
    }).compile();

    service = module.get<CryptoTransactionsService>(CryptoTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
