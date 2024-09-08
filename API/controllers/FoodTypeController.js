const { PrismaClient } = require('@prisma/client');
const { error } = require('console');
const prisma = new PrismaClient();

module.exports = {
    create: async (req, res) => {
        try {
            await prisma.TypeFood.create({
                data: {
                    name: req.body.name,
                    remark: req.body.remark ?? "",
                    status: "use",
                },
            });
            return res.send({ message: "success" });
            
        } catch (e) {
            return res.status(500).send({ error: e.message }); //แสดง error
        }
    },

    list: async (req, res) => {
        try {
            const rows = await prisma.TypeFood.findMany({
                where:{
                    status: "use",
                },
            });
            return res.send({ results: rows });
        } catch (e) {
            return res.status(500).send({ error: e.message }); 
        }
    }
};