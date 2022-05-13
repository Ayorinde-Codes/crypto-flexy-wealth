import { Controller } from '@nestjs/common';
import { CryptoTransactionsService } from './crypto-transactions.service';

@Controller('crypto-transactions')
export class CryptoTransactionsController {
  constructor(
    private readonly cryptoTransactionsService: CryptoTransactionsService,
  ) {}
}
