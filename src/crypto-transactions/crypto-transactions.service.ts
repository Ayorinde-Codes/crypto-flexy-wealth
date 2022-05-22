import { Injectable } from '@nestjs/common';
import { CreateCryptoTransactionDto } from './dto/create-crypto-transaction.dto';
import { CryptoTransaction } from './entity/crypto-transaction.entity';

@Injectable()
export class CryptoTransactionsService {
  async create(createCryptoTransactionDto: CreateCryptoTransactionDto) {
    const createCryptoTransaction = CryptoTransaction.create(
      createCryptoTransactionDto,
    );
    return await createCryptoTransaction.save();
  }

  async show(): Promise<any> {
    return CryptoTransaction.find();
  }

  async showById(id: number): Promise<any> {
    return CryptoTransaction.findOneBy({ id });
  }
}
