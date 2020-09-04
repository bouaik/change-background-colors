const colors = ['#ff0066', 'yellow', 'green', 'aqua', 'blue', 'orange']

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * colors.length)
    console.log(random)
    document.body.style.backgroundColor = colors[random]
})