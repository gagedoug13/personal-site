
const addVisualGif = (event) => {
    const baseName = event.src.split('').slice(0, 94).join('')
    event.src = baseName + 'gif'
    
}

const addBlogGif = (event) => {
    const baseName = event.src.split('').slice(0,83).join('')
    console.log(baseName)
    event.src = baseName + 'gif'
}




// console.log(projectPhoto)