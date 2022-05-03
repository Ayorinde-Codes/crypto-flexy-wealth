import { Module } from '@nestjs/common';
import { WalletTypesService } from './wallet-types.service';
import { WalletTypesController } from './wallet-types.controller';

@Module({
  controllers: [WalletTypesController],
  providers: [WalletTypesService],
  exports: [WalletTypesService],
})
export class WalletTypesModule {}
