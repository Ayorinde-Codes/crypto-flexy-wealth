import { Transactiontype } from 'src/transaction-types/entities/transaction-types-entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CryptoTransaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 27, scale: 18 })
  amount: number;

  @Column()
  status: string;

  @Column()
  type: string;

  @OneToOne(() => Transactiontype)
  @JoinColumn()
  transType: Transactiontype;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
