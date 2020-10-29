import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsUsersService } from './reservations-users.service';

describe('ReservationsUsersService', () => {
  let service: ReservationsUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationsUsersService],
    }).compile();

    service = module.get<ReservationsUsersService>(ReservationsUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
