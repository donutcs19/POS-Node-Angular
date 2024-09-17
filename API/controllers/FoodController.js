const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  create: async (req, res) => {
    try {
      await prisma.food.create({
        data: {
          foodTypeId: req.body.foodTypeId,
          name: req.body.name,
          remark: req.body.remark,
          price: req.body.price,
          foodType: req.body.foodType,
          img: req.body.img,
          status: "use",
        },
      });

      return res.send({ message: "Success" });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },

  list: async (req, res) => {
    try {
      const rows = await prisma.food.findMany({
        include: {
          FoodType: true,
        },
        orderBy: {
          id: "desc",
        },
        where: {
          status: "use",
        },
      });
      
      return res.send({ results: rows });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },

  update: async (req, res) => {},

  remove: async (req, res) => {},

  upload: async (req, res) => {
    try {
      if (req.files.img !== undefined) {
        const img = req.files.img;
        const fileName = img.name;

        img.mv("uploads/" + fileName, (err) => {
          if (err) {
            res.send({ error: err });
          }
        });

        return res.send({ fileName: fileName });
      } else {
        return res.send({ message: "File not found" });
      }
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
};
