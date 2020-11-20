/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Create a document in the database.

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.Create(
                q.Collection("orders"),
                { data: { title: "Serverless applicatios are scaleable" } }
            )
        );
        console.log("Document is created and inserted in container", result.ref.id);
    } catch (e) {
        console.log("Error", e);
    }
}
)()