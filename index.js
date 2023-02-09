import { data } from "./data";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

let body = document.getElementById("food-display")
let displayOrder = document.getElementById("order")
let orderDetails = document.getElementById("order-details")
let cartList = []

render()

function render() {
    let html = ""

    data.forEach(item => {
          body.innerHTML += `
        <div class="food-details">
                <div class="img-box">
                    <img class="img" src="${item.image}">
                </div>
                <div class="food-info">
                    <h2>${item.foodItem}</h2>
                    <h6>${item.ingredients}</h6>
                    <h4>$${item.price}</h4>
                </div>
                <i data-add="${item.id}"  class="fa-2xl fa-solid fa-circle-plus"></i>
        </div>
        `
    })
}


document.addEventListener("click", function(e){
    
    document.querySelector(".complete").style.display = "none" 
    
    if (e.target.dataset.add) {
        addtoCart(e.target.dataset.add)
    } else if (e.target.dataset.remove) {
        removeItem(e.target.dataset.remove)
    } else if (e.target.dataset.complete) {
        makePayment()
    } else if (e.target.dataset.pay) {
        completePay(e)
    }
})


function addtoCart(id) {
    const cartItem = data.filter(item => {
        return item.id === id
    })[0]
    
    cartList.push(cartItem)
    cartList = cartList.map(item => {
        return {
            ...item,
            uid: uuidv4()
        }
    })
    renderCartList()
}


function removeItem(id) {
     cartList = cartList.filter(item => {
        return item.uid !== id
    })
    
    renderCartList()
}


function renderCartList() {
    let total = 0
    let orderList = ""
    
    cartList.forEach(item => {
        total += item.price
        orderList += `    
        <div class="order-info"}">
            <h3>${item.foodItem} <span class="remove"><i data-remove="${item.uid}" class="fa-solid fa-xmark"></i></span></h3>
             <h4>$${item.price}</h4>
        </div>`
    })
    orderDetails.innerHTML = orderList
    
    if (total !== 0){
        document.getElementById("total").textContent = `$${total}`
        document.getElementById("total-info").style.display = "flex"
    } else {
        document.getElementById("total-info").style.display = "none"
    }
    
    if (cartList.length === 0){
         displayOrder.style.display = "none"
    } else {
        displayOrder.style.display = "block"
    }
}


function makePayment() {
    document.getElementById("payment-display").style.display = "flex"
}


function completePay(e){
    e.preventDefault()
    
    let name = document.getElementById("name").value
    document.getElementById("message").textContent = `Thanks, ${name}! Your order is on its way!`
    
    document.getElementById("payment-display").style.display = "none"
    displayOrder.style.display = "none"
    document.querySelector(".complete").style.display = "block" 
    cartList = []
    document.getElementById("form").reset()
}