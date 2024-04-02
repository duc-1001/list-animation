const list = document.querySelector('.lists')
const item = document.querySelectorAll(".item");

const sapxep = (arr) => {
    arr.forEach((e, idx) => {
        e.style.zIndex = 10
        e.style.transform = `translateY(${idx * 100}%)`
        e.style.zIndex = 1
        e.addEventListener('click', () => {
            let newArr = [...arr]
            const element = newArr[idx]
            newArr.splice(idx, 1)
            newArr.unshift(element)
            sapxep(newArr)
            list.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    })
}

sapxep(item)







