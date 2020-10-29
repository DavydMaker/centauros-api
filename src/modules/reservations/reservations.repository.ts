import { EntityRepository, Repository } from 'typeorm';
import { ReservationsEntity } from './reservations.entity';
import {
    ConflictException,
    InternalServerErrorException,
} from '@nestjs/common';
import { CreateReservationsDto } from './dtos/create-reservations.dto';

@EntityRepository(ReservationsEntity)
export class UserRepository extends Repository<ReservationsEntity> {
    async createUser(
        createReservationsDto: CreateReservationsDto,
    ): Promise<ReservationsEntity> {

        const {  } = createReservationsDto;

        const user = this.create();
        // user.name = name;
        // user.document = document
        // user.email = email;
        // user.password = password;

        try {
            console.log(user)
            await user.save();

            return user;
        } catch (error) {
            console.log(error)
            if (error.code.toString() === '23505') {
                throw new ConflictException('Dados inválidos');
            } else {
                throw new InternalServerErrorException(
                    'Faltam alguns dados para conseguir cadastrar um usuário',
                );
            }
        }
    }
}