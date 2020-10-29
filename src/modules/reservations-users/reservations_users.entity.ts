import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UsersEntity } from '../users/users.entity'
@Entity('reservations_users')

export class ReservationsUsersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UsersEntity, user => user.reservations_users)
    user_id: UsersEntity;

    @Column()
    passenger_id:string

    
}