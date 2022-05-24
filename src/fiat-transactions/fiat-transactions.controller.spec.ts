import { Test, TestingModule } from '@nestjs/testing';
import { FiatTransactionsController } from './fiat-transactions.controller';
import { FiatTransactionsService } from './fiat-transactions.service';

describe('FiatTransactionsController', () => {
  let controller: FiatTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiatTransactionsController],
      providers: [FiatTransactionsService],
    }).compile();

    controller = module.get<FiatTransactionsController>(FiatTransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
