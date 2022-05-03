import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { WalletTypesModule } from './wallet-types/wallet-types.module';
import { TransactionTypesModule } from './transaction-types/transaction-types.module';
import { RatesModule } from './rates/rates.module';
import { WalletTypes } from './wallet-types/entities/wallet-types.entity';
import Transactiontypes from './transaction-types/entities/transaction-types-entity';
import { Rate } from './rates/entity/rates.entity';

const entities = [User, WalletTypes, Transactiontypes, Rate];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    WalletTypesModule,
    TransactionTypesModule,
    RatesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
