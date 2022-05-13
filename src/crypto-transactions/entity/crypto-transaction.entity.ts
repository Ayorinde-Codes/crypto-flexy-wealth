import { BaseEntity } from "typeorm";

export class CryptoTransactionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()

}