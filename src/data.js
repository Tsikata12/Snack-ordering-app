import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
import pizza from './assets/images/pizza.png'
import hamburger from './assets/images/hamburger.png'
import beer from './assets/images/beer.png'
export const data = [
        {
        foodItem: "Pizza",
        ingredients: "pepperoni, mushroom, mozarella,",
        price: 14,
        image: pizza,
        id: uuidv4()
    },
        {
        foodItem: "Hamburger",
        ingredients: "beef, cheese, lettuce",
        price: 12,
        image: hamburger,
        id: uuidv4()
    },
    {
        foodItem: "Beer",
        ingredients:"grain, hops, yeast, water",
        price: 12,
        image: beer,
        id: uuidv4()
    }
]

