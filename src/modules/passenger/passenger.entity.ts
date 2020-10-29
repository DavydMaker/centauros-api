
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('passenger')
export class PassengerEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, type: 'varchar' })
    first_name: string

    @Column({ nullable: false, type: 'varchar' })
    last_name: string

    @Column({ nullable: false, type: 'varchar' })
    cpf: string
    
    @Column({ nullable: false, type: 'varchar' })
    phone: string

    @Column({ nullable: false, type: 'varchar' })
    passport: string
    
    @Column({ nullable: false, type: 'varchar' })
    email: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string
}