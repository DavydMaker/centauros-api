import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm'
import { ReservationsUsersEntity } from '../reservations-users/reservations_users.entity'

@Entity('users')
@Unique(['document'])
export class UsersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, type: 'varchar' })
    name: string

    @Column({ nullable: false, type: 'varchar' })
    document: string

    @Column({ nullable: false, type: 'varchar' })
    email: string

    @Column({ nullable: false, type: 'varchar' })
    password: string

    @OneToMany(() => ReservationsUsersEntity, reservationsUsersEntity => reservationsUsersEntity.user_id )
    reservations_users: ReservationsUsersEntity[];

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string
}