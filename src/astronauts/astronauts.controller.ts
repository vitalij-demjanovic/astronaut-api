import { Body, Controller, Get, Post } from '@nestjs/common';
import { AstronautsModel } from './astronauts.model';
import { AstronautsService } from './astronauts.service';
import { CreateAstronautDto } from './dto/create-astronaut.dto';

@Controller('astronauts')
export class AstronautsController {
	constructor(private astronautsService: AstronautsService) {}

	@Get()
	getAll() {
		return this.astronautsService.getAll();
	}

	@Post('create')
	async create(@Body() dto: CreateAstronautDto) {
		return this.astronautsService.createAstronaut(dto);
	}
}
