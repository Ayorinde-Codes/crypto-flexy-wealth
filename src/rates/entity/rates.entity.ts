import { WalletTypes } from 'src/wallet-types/entities/wallet-types.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Rate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => WalletTypes)
  @JoinColumn()
  walletType: WalletTypes;

  @Column('decimal', { precision: 5, scale: 2 })
  buy_rate: number;

  @Column('decimal', { precision: 5, scale: 2 })
  sell_rate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
