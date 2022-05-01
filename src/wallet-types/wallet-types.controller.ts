import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWalletTypesDto } from './dto/create-wallet-type.dto';
import { EditWalletTypeDto } from './dto/edit-wallet-type.dto';
import { WalletTypesService } from './wallet-types.service';

@Controller('wallet-types')
export class WalletTypesController {
  constructor(private readonly walletTypesService: WalletTypesService) {}

  @Post('create')
  create(@Body() createWalletTypesDto: CreateWalletTypesDto) {
    return this.walletTypesService.create(createWalletTypesDto);
  }

  @Get()
  show() {
    return this.walletTypesService.show();
  }

  @Get(':id')
  showById(@Param('id') id: string) {
    return this.walletTypesService.showById(+id);
  }

  @Patch(':id')
  updateWalletType(
    @Body() editWalletTypeDto: EditWalletTypeDto,
    @Param('id') id: string,
  ) {
    // return this.walletTypesService.updateWalletType(+id, editWalletTypeDto);
  }
}
