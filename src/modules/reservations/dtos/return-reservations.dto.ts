import { ReservationsEntity } from "../reservations.entity";

export class ReturnReservationsDto {
    reservations: ReservationsEntity;
    message: string;
}