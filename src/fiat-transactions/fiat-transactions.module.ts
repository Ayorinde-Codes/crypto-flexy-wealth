import { Module } from '@nestjs/common';
import { FiatTransactionsService } from './fiat-transactions.service';
import { FiatTransactionsController } from './fiat-transactions.controller';

@Module({
  controllers: [FiatTransactionsController],
  providers: [FiatTransactionsService],
})
export class FiatTransactionsModule {}
