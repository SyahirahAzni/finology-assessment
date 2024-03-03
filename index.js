import express from 'express'
``
const app = express()
const PORT =    process.env.PORT || 3000

const cars = [
	{
        "type": "electrical",
		"brand": "Tesla",
		"model": "Y",
        "parts": ["charging port", "battery", "electric motor"],
        "id": 1
	},
	{
		"type": "2 wheels",
		"brand": "Honda",
		"model": "Vario 160",
        "parts": ["engine", "fuel system", "frame"],
		"id": 2
	},
	{
		"type": "sport",
		"brand": "Toyota",
		"model": "GR 86",
        "parts": ["engine", "performance", "chassis"],
		"id": 3
	}
]

app.get('/carTypes/:type', (req, res) => {
    const type = req.params.type
    const car = cars.find(( { car }) => car === type)
    res.send(car)
})

app.listen(PORT, ()=> {
    console.log(`API listening on PORT: ${PORT}`)
})