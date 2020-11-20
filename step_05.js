/*
Fauna DB secret key:
fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7
*/

const faunadb = require("faunadb");
const q = faunadb.query;
// Inserting multiple documents at the same time to a collection.

(async () => {
    const client = new faunadb.Client({ secret: "fnAD68eK6bACAlPh4Df77oRqA1Uzs9RtFJWy5_G7" });

    try {
        const result = await client.query(
            q.Map(["My data number 1", "My data number 2", "My data number 3"],
                q.Lambda(
                    "title_one",
                    q.Create(
                        q.Collection("orders"),
                        { data: { title: q.Var("title_one") } }
                    )
                )
            )
        );
        console.log("Multiple data added", result);
    } catch (e) {
        console.log("Error", e);
    }
}
)()