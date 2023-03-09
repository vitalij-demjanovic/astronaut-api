const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Astronauts = [
	{
		firstName: 'Xavier',
		lastName: 'Smith',
		superPower: 'Invisibility',
		birthday: new Date('August 12, 1995'),
	},
	{
		firstName: 'Zoey',
		lastName: 'Parker',
		superPower: 'Telekinesis',
		birthday: new Date('November 2, 1999'),
	},
	{
		firstName: 'Tyler',
		lastName: 'White',
		superPower: 'Super Strength',
		birthday: new Date('June 8, 1997'),
	},
	{
		firstName: 'Lily',
		lastName: 'Green',
		superPower: 'Healing',
		birthday: new Date('March 21, 2001'),
	},
	{
		firstName: 'Max',
		lastName: 'Jones',
		superPower: 'Flight',
		birthday: new Date('July 15, 1996'),
	},
	{
		firstName: 'Sophia',
		lastName: 'Davis',
		superPower: 'Teleportation',
		birthday: new Date('January 18, 2000'),
	},
	{
		firstName: 'Ethan',
		lastName: 'Brown',
		superPower: 'Time Travel',
		birthday: new Date('September 30, 1998'),
	},
	{
		firstName: 'Olivia',
		lastName: 'Taylor',
		superPower: 'Pyrokinesis',
		birthday: new Date('April 5, 2002'),
	},
	{
		firstName: 'Lucas',
		lastName: 'Wilson',
		superPower: 'Healing',
		birthday: new Date('October 23, 1994'),
	},
	{
		firstName: 'Ava',
		lastName: 'Lee',
		superPower: 'Mind Reading',
		birthday: new Date(),
	},
	{
		firstName: 'Mason',
		lastName: 'Campbell',
		superPower: 'Energy Manipulation',
		birthday: new Date('May 7, 2000'),
	},
	{
		firstName: 'Harper',
		lastName: 'Mitchell',
		superPower: 'Telepathy',
		birthday: new Date('February 14, 1999'),
	},
	{
		firstName: 'Benjamin',
		lastName: 'Adams',
		superPower: 'Weather Control',
		birthday: new Date('August 27, 1993'),
	},
	{
		firstName: 'Charlotte',
		lastName: 'Nelson',
		superPower: 'Flight',
		birthday: new Date('November 11, 1998'),
	},
	{
		firstName: 'William',
		lastName: 'Turner',
		superPower: 'Elemental Control',
		birthday: new Date('June 25, 1996'),
	},
	{
		firstName: 'Mia',
		lastName: 'Perez',
		superPower: 'Flight',
		birthday: new Date('December 1, 2001'),
	},
	{
		firstName: 'Alexander',
		lastName: 'Flores',
		superPower: 'Pyrokinesis',
		birthday: new Date('March 17, 1994'),
	},
	{
		firstName: 'Amelia',
		lastName: 'Sanchez',
		superPower: 'Super Speed',
		birthday: new Date('October 9, 1999'),
	},
	{
		firstName: 'Jacob',
		lastName: 'Ortiz',
		superPower: 'Super Speed',
		birthday: new Date('July 3, 1995'),
	},
	{
		firstName: 'Emily',
		lastName: 'Rivera',
		superPower: 'Healing',
		birthday: new Date('April 23, 2002'),
	},
];

const startData = async () => {
	await prisma.$connect();
	for (let astronaut of Astronauts) {
		await prisma.astronaut.create({ data: astronaut });
	}
	await prisma.$disconnect();
};

startData();
