/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Retrive document by Ref

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.Get(q.Ref(q.Collection("orders"), "282734844698427904"))
        );
        console.log("Data Fetched", result);
    } catch (e) {
        console.log("Error", e);
    }
}
)()