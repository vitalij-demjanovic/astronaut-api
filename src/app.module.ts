import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AstronautsModule } from './astronauts/astronauts.module';

@Module({
	imports: [DatabaseModule, AstronautsModule],
})
export class AppModule {}
