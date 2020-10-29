import { ReservationsUsersEntity } from "../reservations_users.entity";

export class ReturnReservationsUsersDto {
    reservations_users: ReservationsUsersEntity;
    message: string;
}