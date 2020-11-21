/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Updating a document

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.Update(
                q.Ref(q.Collection("orders"), "282734844698427904"),
                { data: { title: "My data number new 33", content: "some data of content" } }
            )
        );
        console.log("Data Fetched by index", result);
    } catch (e) {
        console.log("Error", e);
    }
}
)()