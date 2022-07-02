import { query } from "db";

const filter = new Filter();

const handler = async(req, res) => {
    const { title, content } = req.body;
    try {
        if (!title || !content) {
            return res
                .status(400)
                .json({ message: "`title` and `content` are both required" });
        }

        const results = await query(
            `
      INSERT INTO whatsapp (message)
      VALUES (?)
      `, [message]
        );

        return res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;