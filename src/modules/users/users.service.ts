import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './users.repository'

export type User = any;

@Injectable()
export class UsersService {
    constructor(private userRepository: UserRepository) {

    }

    async findOne(username: string): Promise<User | undefined> {
        // return this.users.find(user => user.username === username);
    }

    async create(createUserDto: CreateUserDto) {
        return this.userRepository.createUser(createUserDto);
    }
}