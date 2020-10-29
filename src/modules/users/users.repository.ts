import { EntityRepository, Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import {
    ConflictException,
    InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@EntityRepository(UsersEntity)
export class UserRepository extends Repository<UsersEntity> {
    async createUser(
        createUserDto: CreateUserDto,
    ): Promise<UsersEntity> {

        const { name, document, email, password } = createUserDto;

        const user = this.create();
        user.name = name;
        user.document = document
        user.email = email;
        user.password = password;

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