import { Module } from '@nestjs/common';
import { CryptoTransactionsService } from './crypto-transactions.service';
import { CryptoTransactionsController } from './crypto-transactions.controller';

@Module({
  controllers: [CryptoTransactionsController],
  providers: [CryptoTransactionsService],
})
export class CryptoTransactionsModule {}
