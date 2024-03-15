const nextBtn = document.querySelector(".next-button")
const prevBtn = document.querySelector(".prev-button")
const moviesViewport = document.querySelector(".movies-viewport")

let sliderViewCounter = 5
let sliderGap = 44
let moviesCardCounter = 9
let moviesViewportWidth = moviesViewport.offsetWidth
let sliderCardWidth =  (moviesViewportWidth - (sliderGap*(sliderViewCounter-1))) / sliderViewCounter
let pageWidth = moviesViewportWidth
let movieCardWidth = (moviesViewportWidth - ((moviesCardCounter-1)* 44)) / moviesCardCounter

function nextSlide(){
    let slide = moviesCardCounter - sliderViewCounter 
    let tranx = (movieCardWidth * slide) + (sliderGap*slide)
    moviesViewport.style.cssText = `transform: translateX(-${tranx}px)`
    prevBtn.classList.add('active')
}

function prevSlide(){
    moviesViewport.style.cssText = `transform: translateX(-0px)`
    nextBtn.classList.add('active')
    this.classList.remove('active')
}

const movieCardTemplate = (number)=>{
    const card = document.createElement("div")
    card.className = "trending-movie-card"
    card.innerHTML = `
        <div class="thumbnail" style="max-width:${sliderCardWidth}px;width:${sliderCardWidth}px">
            <img src="./images/slide/slider-${number}.webp" alt="">
        </div>
        <div class="rank-number" rank-number="${number}">
            ${number}
        </div>
    `
    return card
}


for (let i = 0 ;i < 9;i++) {
    const card = movieCardTemplate(number=i+1)
    moviesViewport.appendChild(card)
}

// document.addEventListener('DOMContentLoaded',()=>{
//     let cardWidth = document.querySelector(".movies-viewport").childNodes[1].offsetWidth
//     console.log(cardWidth)
//     let viewportWidth = (cardWidth * moviesCardCounter) + (sliderGap * moviesCardCounter) 
//     console.log(sliderGap * moviesCardCounter)
//     // moviesViewport.style.width = viewportWidth  +'px'

//     // moviesViewportWidth = moviesViewport.offsetWidth
//     // movieCardWidth = (moviesViewportWidth - ((moviesCardCounter-1)* 44)) / moviesCardCounter
// })


nextBtn.addEventListener("click",nextSlide)
prevBtn.addEventListener("click",prevSlide)




