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

	async updateAstronaut(id: string, dto: CreateAstronautDto) {
		return this.prisma.astronaut.update({
			where: { id: Number(id) },
			data: dto,
		});
	}

	async findAstronaut(id: string) {
		return this.prisma.astronaut.findUnique({ where: { id: Number(id) } });
	}

	async deleteAstronaut(id: string) {
		return this.prisma.astronaut.delete({ where: { id: Number(id) } });
	}
}
