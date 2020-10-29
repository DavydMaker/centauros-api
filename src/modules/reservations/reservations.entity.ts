import { BaseEntity, Column,  Entity,  PrimaryGeneratedColumn } from 'typeorm'

@Entity('reservations')

export class ReservationsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, type: 'varchar' })
    user_id: number

    @Column({ nullable: false, type: 'varchar' })
    passenger_id: number

    @Column({ nullable: false, type: 'varchar' })
    flight_info: string
}