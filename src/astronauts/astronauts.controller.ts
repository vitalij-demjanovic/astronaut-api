import { Body, Controller, Get, Post } from '@nestjs/common';
import { AstronautsModel } from './astronauts.model';
import { AstronautsService } from './astronauts.service';

@Controller('astronauts')
export class AstronautsController {
	constructor(private astronautsService: AstronautsService) {}

	@Get()
	getAll() {
		return this.astronautsService.getAll();
	}

	@Post()
	async create(@Body() dto: Omit<AstronautsModel, '_id'>) {}
}
