-- CreateTable
CREATE TABLE "FoodSize" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "remark" TEXT NOT NULL,
    "fee" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'use',
    "FoodTypeId" INTEGER NOT NULL,

    CONSTRAINT "FoodSize_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FoodSize" ADD CONSTRAINT "FoodSize_FoodTypeId_fkey" FOREIGN KEY ("FoodTypeId") REFERENCES "TypeFood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
