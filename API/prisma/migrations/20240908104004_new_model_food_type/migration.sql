-- CreateTable
CREATE TABLE "TypeFood" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "remark" TEXT,
    "status" TEXT NOT NULL DEFAULT 'use',

    CONSTRAINT "TypeFood_pkey" PRIMARY KEY ("id")
);
