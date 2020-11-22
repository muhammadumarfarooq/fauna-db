/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// generate database key
(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.CreateKey({
                database: q.Database("gatsbyApp"),
                role: "server",
            })
        );
        console.log("DB secret key", result.secret);
    } catch (e) {
        console.log("Error", e);
    }
}


)()