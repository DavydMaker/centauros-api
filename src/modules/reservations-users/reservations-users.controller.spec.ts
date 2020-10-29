import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsUsersController } from './reservations-users.controller';

describe('ReservationsUsersController', () => {
  let controller: ReservationsUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsUsersController],
    }).compile();

    controller = module.get<ReservationsUsersController>(ReservationsUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
