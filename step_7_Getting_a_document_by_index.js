/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Retrive document by index

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.Get(q.Match(q.Index("post_by_title"), "My data number 3"))
        );
        console.log("Data Fetched by index", result);
    } catch (e) {
        console.log("Error", e);
    }
}
)()