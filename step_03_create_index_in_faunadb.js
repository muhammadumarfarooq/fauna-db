/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Create index of the container inside the DB.

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.CreateIndex({
                name: "post_by_title", //name of the index
                source: q.Collection("orders"), // name of collection on which we want to index
                terms: [{ field: ["data", "title"] }] // we have a title property inside the data object.
            })
        );
        console.log("Index Created", result.name);
    } catch (e) {
        console.log("Error", e);
    }
}
)()