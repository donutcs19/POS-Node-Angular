const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    create: async (req, res) => {
        try {
            await prisma.foodSize.create({
                data: {
                    name: req.body.name,
                    FoodTypeId : req.body.FoodTypeId,
                    fee: req.body.price,
                    remark: req.body.remark,
                },
            });
            return res.send({ message: "Success" })
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    },

    list: async (req, res) => {
        try {
            const  rows = await prisma.foodSize.findMany({
                orderBy:{
                    id: "desc",
                },
                include: {
                    FoodType: true,
                },
                where: {
                    status: "use",
                },
            });
            return res.send({ results: rows });
        } catch (e) {
            return res.status(500).send({ error:e.message });
        }
    },

    remove: async (req, res) => {
        try {
            await prisma.foodSize.update({
                data: {
                    status: "delete",
                },
                where: {
                    id: parseInt(req.params.id),
                }
            });
            return res.send({ message: "Success" })
        } catch (e) {
            return res.send(500).send({ error: e.message });
        }
    },

    update: async (req, res) => {
        try {
            await prisma.foodSize.update({
                data: {
                    name: req.body.name,
                    remark: req.body.remark,
                    FoodTypeId: req.body.FoodTypeId,
                    fee : req.body.price
                },
                where: {
                    id: req.body.id,
                },
            });

            return res.send({ message: "Success" })
        } catch (e) {
            return res.send(500).send({ error: e.message });
        }
    },

   
}