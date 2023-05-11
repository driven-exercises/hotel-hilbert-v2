import express from "express";

import { db } from "./database/database.js";

const app = express();
app.use(express.json());

app.get("/allocations", async (req, res) => {
  try {
    const resultGuests = await db.query(`SELECT * FROM guests;`)
    const resultRooms = await db.query(`SELECT * FROM rooms;`)
    const resultAllocations = await db.query(`SELECT * FROM allocations;`)

    const allocations = resultAllocations.rows.map(allocation => ({
      ...allocation,
      guestName: resultGuests.rows.find(g => g.id === allocation.guestId).name,
      roomName: resultRooms.rows.find(r => r.id === allocation.roomId).name
    }))

    res.send(allocations)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.listen(4000, () => {
  console.log("Server is listening on port 4000.");
});
