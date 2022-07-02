import mysql from "serverless-mysql";

export const db = mysql({
    config: {
        host: "localhost",
        database: "smmc",
        user: "root",
        password: "",
        port: 3306,
    },
});

export async function query(
    q: string,
    values: (string | number)[] | string | number = []
) {
    try {
        const results = await db.query(q, values);
        await db.end();
        return results;
    } catch (e) {
        throw Error(e.message);
    }
}
