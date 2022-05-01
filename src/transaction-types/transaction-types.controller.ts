import { Controller } from '@nestjs/common';
import { TransactionTypesService } from './transaction-types.service';

@Controller('transaction-types')
export class TransactionTypesController {
  constructor(
    private readonly transactionTypesService: TransactionTypesService,
  ) {}
}
