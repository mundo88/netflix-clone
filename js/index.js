

const sliderData = [
    {
        'thumb':'/images/slide/slider-1.webp',
        'number':1
    },
    {
        'thumb':'/images/slide/slider-2.webp',
        'number':2
    },
    {
        'thumb':'/images/slide/slider-3.webp',
        'number':3
    },
    {
        'thumb':'/images/slide/slider-4.webp',
        'number':4
    },
    {
        'thumb':'/images/slide/slider-5.webp',
        'number':5
    },
    {
        'thumb':'/images/slide/slider-6.webp',
        'number':6
    },
    {
        'thumb':'/images/slide/slider-7.webp',
        'number':7
    },
    {
        'thumb':'/images/slide/slider-8.webp',
        'number':8
    },
    {
        'thumb':'/images/slide/slider-9.webp',
        'number':9
    },
    {
        'thumb':'/images/slide/slider-1.webp',
        'number':10
    },
    {
        'thumb':'/images/slide/slider-2.webp',
        'number':11
    },
    // {
    //     'thumb':'/images/slide/slider-3.webp',
    //     'number':12
    // },
    // {
    //     'thumb':'/images/slide/slider-4.webp',
    //     'number':13
    // },
    // {
    //     'thumb':'/images/slide/slider-5.webp',
    //     'number':14
    // },
    // {
    //     'thumb':'/images/slide/slider-6.webp',
    //     'number':15
    // },
    // {
    //     'thumb':'/images/slide/slider-7.webp',
    //     'number':16
    // },
    // {
    //     'thumb':'/images/slide/slider-8.webp',
    //     'number':17
    // },
    // {
    //     'thumb':'/images/slide/slider-9.webp',
    //     'number':18
    // },
    // {
    //     'thumb':'/images/slide/slider-3.webp',
    //     'number':19
    // },
    // {
    //     'thumb':'/images/slide/slider-4.webp',
    //     'number':20
    // },
    // {
    //     'thumb':'/images/slide/slider-5.webp',
    //     'number':21
    // },
    // {
    //     'thumb':'/images/slide/slider-6.webp',
    //     'number':22
    // },
    // {
    //     'thumb':'/images/slide/slider-7.webp',
    //     'number':23
    // },
    // {
    //     'thumb':'/images/slide/slider-8.webp',
    //     'number':24
    // },
    // {
    //     'thumb':'/images/slide/slider-9.webp',
    //     'number':25
    // }
]


const movieSlider = document.querySelector(".movies-slider")
const nextBtn = document.querySelector(".next-button")
const prevBtn = document.querySelector(".prev-button")
const moviesViewport = document.querySelector(".movies-viewport")
let moviesViewportWidth = moviesViewport.offsetWidth
let sliderView = parseInt(movieSlider.getAttribute('slider-view'))
let sliderGap = parseInt(movieSlider.getAttribute('slider-gap'))
let cardWidth = (moviesViewportWidth - (sliderGap*(sliderView-1))) / sliderView
let sliderCount = sliderData.length
let sliderPage = sliderData.length/sliderView
let currentPage = 0

moviesViewport.style.cssText = `gap: ${sliderGap}px`
nextBtn.classList.add('active')

const movieCardTemplate = (data)=>{
    const card = document.createElement("div")
    card.className = "trending-movie-card"
    card.innerHTML = `
        <div class="thumbnail" style="max-width:${cardWidth}px;width:${cardWidth}px">
            <img src="${data.thumb}" alt="">
        </div>
        <div class="rank-number" rank-number="${data.number}">
            ${data.number}
        </div>
    `
    return card
}


for (let index = 0; index < sliderCount; index++) {
    const data = sliderData[index];
    let card = movieCardTemplate(data)
    moviesViewport.appendChild(card)
}

function nextSlide(){
    currentPage++
    let transX = (currentPage * moviesViewportWidth) 
    if (sliderCount - (currentPage * sliderView) < sliderView) {
        let remaninCardCount = sliderCount - (currentPage * sliderView) //3
        let remaninCardWidth = remaninCardCount*cardWidth
        let lastPageTranx = (currentPage-1)* moviesViewportWidth
        transX = remaninCardWidth + (sliderGap*remaninCardCount) +  lastPageTranx +  (sliderGap*(currentPage-1))
        nextBtn.classList.remove('active')
    } 
    else {
        transX = transX + (sliderGap*currentPage)
    }
    moviesViewport.style.transform = `translateX(-${transX}px)`
    if (currentPage > 0) {
        prevBtn.classList.add('active')
    }
}

function prevSlide(){
    currentPage --
    let transX = (currentPage * moviesViewportWidth) + (sliderGap*currentPage)
    moviesViewport.style.transform = `translateX(-${transX}px)`
    if (currentPage==0) {
        prevBtn.classList.remove('active')
        nextBtn.classList.add('active')
    }
}


nextBtn.addEventListener('click',nextSlide)
prevBtn.addEventListener('click',prevSlide)

