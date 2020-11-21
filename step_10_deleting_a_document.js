/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Deleting a document

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.Delete(
                q.Ref(q.Collection("orders"), "282734844698427904"),
            )
        );
        console.log("Documented deleted", result);
    } catch (e) {
        console.log("Error", e);
    }
}
)()