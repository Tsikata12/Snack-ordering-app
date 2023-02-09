import{v4 as i}from"https://jspm.dev/uuid";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const f="/assets/pizza-3fb8396b.png",u="/assets/hamburger-65b7aebc.png",p="/assets/beer-b51788b4.png",c=[{foodItem:"Pizza",ingredients:"pepperoni, mushroom, mozarella,",price:14,image:f,id:i()},{foodItem:"Hamburger",ingredients:"beef, cheese, lettuce",price:12,image:u,id:i()},{foodItem:"Beer",ingredients:"grain, hops, yeast, water",price:12,image:p,id:i()}];let y=document.getElementById("food-display"),a=document.getElementById("order"),g=document.getElementById("order-details"),s=[];h();function h(){c.forEach(e=>{y.innerHTML+=`
        <div class="food-details">
                <div class="img-box">
                    <img class="img" src="${e.image}">
                </div>
                <div class="food-info">
                    <h2>${e.foodItem}</h2>
                    <h6>${e.ingredients}</h6>
                    <h4>$${e.price}</h4>
                </div>
                <i data-add="${e.id}"  class="fa-2xl fa-solid fa-circle-plus"></i>
        </div>
        `})}document.addEventListener("click",function(e){document.querySelector(".complete").style.display="none",e.target.dataset.add?b(e.target.dataset.add):e.target.dataset.remove?v(e.target.dataset.remove):e.target.dataset.complete?I():e.target.dataset.pay&&E(e)});function b(e){const o=c.filter(r=>r.id===e)[0];s.push(o),s=s.map(r=>({...r,uid:i()})),m()}function v(e){s=s.filter(o=>o.uid!==e),m()}function m(){let e=0,o="";s.forEach(r=>{e+=r.price,o+=`    
        <div class="order-info"}">
            <h3>${r.foodItem} <span class="remove"><i data-remove="${r.uid}" class="fa-solid fa-xmark"></i></span></h3>
             <h4>$${r.price}</h4>
        </div>`}),g.innerHTML=o,e!==0?(document.getElementById("total").textContent=`$${e}`,document.getElementById("total-info").style.display="flex"):document.getElementById("total-info").style.display="none",s.length===0?a.style.display="none":a.style.display="block"}function I(){document.getElementById("payment-display").style.display="flex"}function E(e){e.preventDefault();let o=document.getElementById("name").value;document.getElementById("message").textContent=`Thanks, ${o}! Your order is on its way!`,document.getElementById("payment-display").style.display="none",a.style.display="none",document.querySelector(".complete").style.display="block",s=[],document.getElementById("form").reset()}
