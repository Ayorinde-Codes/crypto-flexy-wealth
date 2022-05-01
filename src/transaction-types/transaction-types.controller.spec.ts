import { Test, TestingModule } from '@nestjs/testing';
import { TransactionTypesController } from './transaction-types.controller';
import { TransactionTypesService } from './transaction-types.service';

describe('TransactionTypesController', () => {
  let controller: TransactionTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionTypesController],
      providers: [TransactionTypesService],
    }).compile();

    controller = module.get<TransactionTypesController>(
      TransactionTypesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
