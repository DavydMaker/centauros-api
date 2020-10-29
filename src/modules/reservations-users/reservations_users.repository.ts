import { EntityRepository, Repository } from 'typeorm';
import { ReservationsUsersEntity } from './reservations_users.entity';
import {
    ConflictException,
    InternalServerErrorException,
} from '@nestjs/common';
import { CreateReservationsUsersDto } from './dtos/create-reservations-users.dto';

@EntityRepository(ReservationsUsersEntity)
export class UserRepository extends Repository<ReservationsUsersEntity> {
    async createUser(
        createReservationsUsersDto: CreateReservationsUsersDto,
    ): Promise<ReservationsUsersEntity> {

        const {  } = createReservationsUsersDto;

        const user = this.create();
      

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