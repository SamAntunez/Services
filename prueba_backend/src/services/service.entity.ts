import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  serviceType: string;

  @Column()
  scheduledAt: Date;

  @Column('decimal')
  price: number;

  @Column()
  status: 'pending' | 'completed' | 'cancelled';
}
