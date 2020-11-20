/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Create a container in the database.

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.CreateIndex({
                name: "post_by_title",
                source: q.Collection("orders"),
                terms: [{ field: ["data", "title"] }]
            })
        );
        console.log("Index Created", result.name);
    } catch (e) {
        console.log("Error", e);
    }
}
)()