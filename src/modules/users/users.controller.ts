import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service'
import { ReturnUserDto } from './dtos/return-user.dto'

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post('create')
    async createProduct(
        @Body() createUserDto: CreateUserDto,
    ): Promise<ReturnUserDto> {
        const user = await this.userService.create(createUserDto);
        return {
            user,
            message: 'Cadastro efetuado com sucesso!',
        };
    }
}