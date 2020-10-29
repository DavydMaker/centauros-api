import { UsersController } from './modules/users/users.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { PassengerModule } from './modules/passenger/passenger.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { ReservationsUsersModule } from './modules/reservations-users/reservations-users.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AuthModule, PassengerModule, ReservationsModule, ReservationsUsersModule],
  controllers: [
    UsersController, AppController],
  providers: [],
})
export class AppModule { }
