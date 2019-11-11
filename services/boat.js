module.exports = (app, db) => {
    app.get("/boats", (req, res) =>
        db.boat.findAll().then((result) => res.json(result))
    )

    app.post("/boat", async (req, res) => {
        const result = await db.boat.create({
            name: req.body.name,
            color: req.body.color
        })

        // console.log({ result })
        // console.log({ ...result })

        // db.boat.create({
        //     name: req.body.name,
        //     color: req.body.color
        // }).then(result => {

        // })
        res.status(201).json(result)
    })



    app.put("/boat/:id", async (req, res) => {
        let body = req.body
        const fields = ['name', 'color']
        let updates = {}
        for (let field of fields) {
            updates[field] = req.body[field]
        }

        const result = await db.boat.update(
            {
                name: req.body.name,
                color: req.body.color
            },
            { where: { id: req.params.id } }
        )
        res.status(200).json(result)
    })

    app.delete("/boat/:id", async (req, res) => {
        db.boat.destroy({
            where: {
                id: req.params.id,
            }
        })
            .then((result) => {
                res.status(204).json();
            })
            .catch((err) => {
                res.status(400).json();
            })
    })
}