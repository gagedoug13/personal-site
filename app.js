
const addGif = (event) => {
    const baseName = event.src.split('').slice(0, event.src.length - 3).join('')
    console.log(baseName)
    event.src = baseName + 'gif'
    setInterval(() => {
        event.src = baseName + 'png'
    },12000)
}
