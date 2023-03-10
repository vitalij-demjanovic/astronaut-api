import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAstronautDto } from './dto/create-astronaut.dto';

@Injectable()
export class AstronautsService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.astronaut.findMany();
	}

	async createAstronaut(dto: CreateAstronautDto) {
		return this.prisma.astronaut.create({ data: dto });
	}

	async findById() {}

	async deleteById() {}

	async updateById() {}
}
