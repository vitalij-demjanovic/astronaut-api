import { Module } from '@nestjs/common';
import { AstronautsService } from './astronauts.service';
import { AstronautsController } from './astronauts.controller';

@Module({
  providers: [AstronautsService],
  controllers: [AstronautsController]
})
export class AstronautsModule {}
