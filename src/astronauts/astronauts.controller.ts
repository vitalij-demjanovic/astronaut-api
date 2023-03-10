import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AstronautsModel } from './astronauts.model';
import { AstronautsService } from './astronauts.service';
import { CreateAstronautDto } from './dto/create-astronaut.dto';

@Controller('astronauts')
export class AstronautsController {
	constructor(private astronautsService: AstronautsService) {}

	@Get()
	async getAll() {
		return this.astronautsService.getAll();
	}

	@Post('create')
	async create(@Body() dto: CreateAstronautDto) {
		return this.astronautsService.createAstronaut(dto);
	}

	@Put('update/:id')
	async update(@Param('id') id: string, @Body() dto: CreateAstronautDto) {
		return this.astronautsService.updateAstronaut(id, dto);
	}
}
