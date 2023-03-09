-- CreateTable
CREATE TABLE "Astronaut" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "superPower" TEXT NOT NULL,
    "birthday" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Astronaut_pkey" PRIMARY KEY ("id")
);
