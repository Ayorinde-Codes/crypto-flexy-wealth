import { Test, TestingModule } from '@nestjs/testing';
import { CryptoTransactionsController } from './crypto-transactions.controller';
import { CryptoTransactionsService } from './crypto-transactions.service';

describe('CryptoTransactionsController', () => {
  let controller: CryptoTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptoTransactionsController],
      providers: [CryptoTransactionsService],
    }).compile();

    controller = module.get<CryptoTransactionsController>(
      CryptoTransactionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
