const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv'); //เพื่ออ่านค่าจาก .env file

dotenv.config(); //ไปอ่านค่าจาก .env



module.exports = {
    signIn: async (req, res) => {
        try {
            const rows = await prisma.user.findFirst({ //SELECT row first
                
                select: {  // เลือก cl ที่จะใช้
                    id: true,
                    name: true,
                    level: true,
                },

                where:{   //คำสั่ง SQL SELET * ....
                    username: req.body.username,  //ค่าจาก Input form
                    password: req.body.password,
                    status: 'use'
                },
            });
            
            if (rows != null){ //ถ้า rows มีค่าใน db
                const key = process.env.SECRET_KEY; //รับ key มาใช้
                const token = jwt.sign(rows, key, { expiresIn: '30d' }); //สร้าง JWT โดยใช้ข้อมูลในตัวแปร rows เป็น payload และเซ็นด้วย key ซึ่ง JWT ที่สร้างขึ้นนี้จะหมดอายุหลังจาก 30 วัน

                return res.send({ token: token, name: rows.name, id: rows.id }); //ถ้าผ่านให้ส่ง token และ ส่งชื่อไปใช้งาน
            }

            return res.status(401).send({ message: "unauthorized" }); //sign in ไม่ผ่าน
        } catch (e) {
            return res.status(500).send({ error: e.message });
        }
    }
}