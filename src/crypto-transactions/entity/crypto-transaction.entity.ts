import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class CryptoTransactionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 27, scale: 18 })
  amount: number;
}
