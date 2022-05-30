import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CryptoTransactionsService } from './crypto-transactions.service';
import { CreateCryptoTransactionDto } from './dto/create-crypto-transaction.dto';

@Controller('crypto-transactions')
export class CryptoTransactionsController {
  constructor(
    private readonly cryptoTransactionsService: CryptoTransactionsService,
  ) {}

  @Get()
  show() {
    return this.cryptoTransactionsService.show();
  }

  @Post()
  create(@Body() createCryptoTransactionDto: CreateCryptoTransactionDto) {
    return this.cryptoTransactionsService.create(createCryptoTransactionDto);
  }

  @Get(':id')
  showById(@Param('id') id: string) {
    return this.cryptoTransactionsService.showById(+id);
  }
}
