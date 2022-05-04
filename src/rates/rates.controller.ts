import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRatesDto } from './dto/create-rates.dto';
import { RatesService } from './rates.service';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  show() {
    return this.ratesService.show();
  }

  @Post()
  create(@Body() createRateDto: CreateRatesDto) {
    return this.ratesService.create(createRateDto);
  }

  @Get(':id')
  showById(@Param('id') id: string) {
    return this.ratesService.showById(+id);
  }
}
