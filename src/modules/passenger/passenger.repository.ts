import { EntityRepository, Repository } from 'typeorm';
import { PassengerEntity } from './passenger.entity';
import {
    ConflictException,
    InternalServerErrorException,
} from '@nestjs/common';
import { CreatePassengerDto } from './dtos/create-passenger.dto';

@EntityRepository(PassengerEntity)
export class UserRepository extends Repository<PassengerEntity> {
    async createUser(
        createPassengerDto: CreatePassengerDto,
    ): Promise<PassengerEntity> {

        const {  } = createPassengerDto;

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