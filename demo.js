const cart = []
const logo = document.querySelector('.log')
const name = document.querySelector('.name')
const image =document.querySelector('.image')
const title = document.querySelector('.title')
const date = document.querySelector('.date')
logo.addEventListener('click',()=>{
    document.querySelectorAll('.navbar-menu').forEach(item=>{
        item.classList.toggle('navbar-show')
    })
    document.querySelector('.nav-bg').classList.toggle('blue')
})
document.querySelector('.add').addEventListener('click',()=>{
    cart.push(
        {
            image: image.value,
            name: name.value,
            title: title.value,
            date: date.value
        }
    )
    
    console.log(cart)
    let html = ''
    cart.forEach(object => {
        const {image, name, title, date} = object
        console.log(image)
        html += `    <div  style="display: flex; gap: 17rem; align-items: center;border-bottom:1px solid black;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div><img width="40px" height="40px" style="border-radius: 3rem;" src="${image}" alt=""></div>
                                <div class="name">${name}</div>
                            </div>
                            <div>
                                <p style="font-size: x-large;font-weight: 600;">${title}</p>
                            </div>
                            <div s>
                                <p>${date}</p>
                            </div>
                            <div >x</div>
                        </div>`
                        document.querySelector('.action').innerHTML = html
    })
});
document.querySelector('.clear').addEventListener('click',()=>{
    document.querySelector('.action').innerHTML = ''
})