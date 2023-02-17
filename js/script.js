let boxColor = document.querySelectorAll('.btn')

boxColor.forEach(box => {
    box.addEventListener('click', () => {
        let valueColor = box.dataset.color

        document.documentElement.style.setProperty('--theme-color', `${valueColor}`)
    })
})





