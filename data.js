import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

export const data = [
        {
        foodItem: "Pizza",
        ingredients: "pepperoni, mushroom, mozarella,",
        price: 14,
        image: "images/pizza.png",
        id: uuidv4()
    },
        {
        foodItem: "Hamburger",
        ingredients: "beef, cheese, lettuce",
        price: 12,
        image: "images/hamburger.png",
        id: uuidv4()
    },
    {
        foodItem: "Beer",
        ingredients:"grain, hops, yeast, water",
        price: 12,
        image: "images/beer.png",
        id: uuidv4()
    }
]

