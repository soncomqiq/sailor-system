module.exports = (app, db) => {
    app.get("/reserves", (req, res) => {
        db.reserve.findAll().then((result) => res.status(201).json(result))
    })

    app.post("/reserve", async (req, res) => {
        const boatId = req.body.boatId
        const sailorId = req.body.sailorId
        const date = req.body.date

        console.log({ boatId, sailorId, date })

        const boat = await db.boat.findByPk(boatId )
        const sailor = await db.sailor.findByPk(sailorId)

        res.status(200).json(await boat.addSailor(sailor, { through: { date: date } }))

        // clear all boats of a sailor
        // await sailor.setBoats([])

        // remove one boat
        // await sailor.removeBoat(boat)
    })
}