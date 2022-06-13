import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  show() {
    return this.transactionsService.show();
  }

  @Post()
  create(@Body() createTransactionDto: any) {
    return this.transactionsService.create(createTransactionDto);
  }
}
