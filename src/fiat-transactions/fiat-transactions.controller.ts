import { Controller } from '@nestjs/common';
import { FiatTransactionsService } from './fiat-transactions.service';

@Controller('fiat-transactions')
export class FiatTransactionsController {
  constructor(
    private readonly fiatTransactionsService: FiatTransactionsService,
  ) {}
}
