import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoTransactionsService {
  //todo
  async findAll(): Promise<any> {
    return 'This action returns all transactions';
  }

  async findOne(id: string): Promise<any> {
    return `This action returns a #${id} transaction`;
  }

  async create(transaction: any): Promise<any> {
    return `This action adds a new transaction: ${transaction}`;
  }
}
