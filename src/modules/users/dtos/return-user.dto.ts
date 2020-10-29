import { UsersEntity } from "../users.entity";

export class ReturnUserDto {
    user: UsersEntity;
    message: string;
}