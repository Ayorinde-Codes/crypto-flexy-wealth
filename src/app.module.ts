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
import { Rate } from './rates/entity/rates.entity';
import { UserWalletsModule } from './user-wallets/user-wallets.module';
import { UserWallet } from './user-wallets/entity/user-wallet.entity';
import { UserWalletHistoriesModule } from './user-wallet-histories/user-wallet-histories.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CryptoTransactionsModule } from './crypto-transactions/crypto-transactions.module';
import { Transactiontype } from './transaction-types/entities/transaction-types-entity';
import { Transaction } from './transactions/entity/transaction.entity';
import { CryptoTransaction } from './crypto-transactions/entity/crypto-transaction.entity';

const entities = [
  User,
  WalletTypes,
  Transactiontype,
  Rate,
  UserWallet,
  Transaction,
  CryptoTransaction,
];

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
    UserWalletsModule,
    UserWalletHistoriesModule,
    TransactionsModule,
    CryptoTransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
