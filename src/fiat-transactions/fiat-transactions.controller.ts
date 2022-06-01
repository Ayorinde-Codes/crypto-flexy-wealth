import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFiatTransactionDto } from './dto/create-fiat-transaction.dto';
import { FiatTransactionsService } from './fiat-transactions.service';

@Controller('fiat-transactions')
export class FiatTransactionsController {
  constructor(
    private readonly fiatTransactionsService: FiatTransactionsService,
  ) {}

  @Get()
  show() {
    return this.fiatTransactionsService.show();
  }

  @Get(':id')
  showById(@Param('id') id: string) {
    return this.fiatTransactionsService.showById(+id);
  }

  @Post()
  create(@Body() createFiatTransactionDto: CreateFiatTransactionDto) {
    return this.fiatTransactionsService.create(createFiatTransactionDto);
  }
}
