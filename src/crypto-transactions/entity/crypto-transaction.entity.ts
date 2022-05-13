import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export class CryptoTransactionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
