module.exports = (app, db) => {
    app.get("/sailors", async (req, res) => {
        let sailors = await db.sailor.findAll({ include: [ db.boat ]})
        // for (let sailor of sailors) {
        //     sailors["boats"] = sailors.getBoats()
        // }
        res.status(201).json(sailors)
    })

    app.post("/sailor", (req, res) => {
        db.sailor.create({
            name: req.body.name,
            rating: req.body.rating,
            age: req.body.age,
        })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                if (err.name === 'SequelizeValidationError') {
                    res.status(400).json({ message: err.message })
                } else {
                    res.status(500).json({ message: "something went wrong." })
                }
            })
    })
}