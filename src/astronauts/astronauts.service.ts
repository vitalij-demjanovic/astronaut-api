import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AstronautsService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.astronaut.findMany();
	}

	async create() {}

	async findById() {}

	async deleteById() {}

	async updateById() {}
}
