import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTransactionTypesDto } from './dto/create-transaction-type.dto';
import { TransactionTypesService } from './transaction-types.service';

@Controller('transaction-types')
export class TransactionTypesController {
  constructor(
    private readonly transactionTypesService: TransactionTypesService,
  ) {}

  @Post()
  create(@Body() createTransactionTypesDto: CreateTransactionTypesDto) {
    return this.transactionTypesService.create(createTransactionTypesDto);
  }

  @Get()
  show() {
    return this.transactionTypesService.show();
  }

  @Get(':id')
  showById(@Param('id') id: string) {
    return this.transactionTypesService.showById(+id);
  }
}
