/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.CreateDatabase({ name: "gatsbyApp" })
        );
        console.log("DB is created successfully", result);
    } catch (e) {
        console.log("Error", e);
    }
}


)()