import { Module } from '@nestjs/common';
import { TransactionTypesService } from './transaction-types.service';
import { TransactionTypesController } from './transaction-types.controller';

@Module({
  controllers: [TransactionTypesController],
  providers: [TransactionTypesService],
  exports: [TransactionTypesService],
})
export class TransactionTypesModule {}
