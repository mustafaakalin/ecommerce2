import { Column, CreateDateColumn, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';




export enum CarrierType {
  ROYAL_MAIL = 'Royal Mail',
  DHL = 'DHL',
  UPS = 'UPS',
  FEDEX = 'FedEx',
  EVRI = 'Evri',
  DPD = 'DPD',
  PARCELFORCE = 'Parcelforce',
  YODEL = 'Yodel',
  AMAZON = 'Amazon Logistics',
  HERMES = 'Hermes',
  MAERSK = 'Maersk Line UK Limited',
  PO_FERRIES = 'P&O Ferries Holdings Limited',
  INCHCAPE = 'Inchcape Shipping Services Holdings Limited',
  JAMES_FISHER = 'James Fisher and Sons PLC',
  SHELL = 'Shell International Trading and Shipping Company Limited',
  ABP = 'Associated British Ports',
  CARNIVAL = 'Carnival PLC',
  TORM = 'TORM PLC',
  HUTCHISON = 'Hutchison Ports Europe Limited',
  MARITIME = 'Maritime Transport Limited',
  FEDEX_EUROPE = 'Federal Express Europe Inc',
  YANG_MING = 'Yang Ming (UK) Ltd',
  FELIXSTOWE = 'Port of Felixstowe Limited',
  ENI = 'ENI Trading & Shipping S.P.A.',
  RCL = 'RCL Cruises Ltd',
  DENHOLM = 'Denholm Group Limited',
  XPRESS = 'X-Press Container Line (UK) Limited',
  HENTY = 'Henty Oil Limited'
}

export enum ShipmentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

@Entity('shipments')
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @OneToOne(() => Order, order => order.id)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  tracking_number: string;

  @Column({
    type: 'enum',
    enum: CarrierType
  })
  carrier: CarrierType;

  @Column({
    type: 'enum',
    enum: ShipmentStatus,
    default: ShipmentStatus.PENDING
  })
  status: ShipmentStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}