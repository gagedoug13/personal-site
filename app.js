
const addVisualGif = (event) => {
    const baseName = event.src.split('').slice(0, 94).join('')
    event.src = baseName + 'gif'
    setInterval(() => {
        event.src = baseName + 'png'
      
    },12000)
    
    
}

const addBlogGif = (event) => {
    const baseName = event.src.split('').slice(0,83).join('')
    event.src = baseName + 'gif'
    setInterval(() => {
        event.src = baseName + 'png'
      
    },12000)


}

// console.log(projectPhoto)