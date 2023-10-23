const selectNumValue = document.querySelectorAll('.count');
let speed = 200;
selectNumValue.forEach(element => {
    let targetCount = element.dataset.count;
    let initialCount = +element.innerText;

    let newIncrement = Math.floor(targetCount / speed)
    const updateNumber = () => {
        initialCount += newIncrement
        element.innerText = initialCount
        if (initialCount < targetCount) {
            setTimeout(() => {
                updateNumber()
            }, 5);
        }

    }

    updateNumber();
});