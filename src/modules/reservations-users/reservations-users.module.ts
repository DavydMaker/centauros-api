import { Module } from '@nestjs/common';
import { ReservationsUsersController } from './reservations-users.controller';
import { ReservationsUsersService } from './reservations-users.service';

@Module({
  controllers: [ReservationsUsersController],
  providers: [ReservationsUsersService]
})
export class ReservationsUsersModule {}
