const windowWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const windowHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const container = document.querySelector('.container')
const backgroundContainer = document.querySelector('.background')
const menu = document.querySelector('.menu')
const about = document.querySelector('.about')
const works = document.querySelector('.works')
const contact = document.querySelector('.contact')
const pageInfo = document.querySelector('.page-info')
const list = document.querySelector('ul')
const phone = document.querySelector('.phone')
const comet = document.querySelector('.comet')
const listItemHeight = 71.3


//setBackground()

function setBackground(){	
	
	for(let usedWidth = 0; usedWidth < windowWidth; usedWidth += 70){
		for(let usedHeight = 0; usedHeight < windowHeight; usedHeight += 70){
			let diamond = document.createElement('div')
			diamond.classList.add('diamond')
			diamond.style.left = usedWidth + 'px'
			diamond.style.top = usedHeight + 'px'
			
			let innerD = document.createElement('div')
			innerD.classList.add('innerD')
			innerD.style.left = usedWidth + 'px'
			innerD.style.top = usedHeight + 'px'
			
			diamond.addEventListener('mouseover', () => {
				diamond.style.animation = 'ppp 1s ease-out'
				diamond.style.animationFillMode = 'forwards'
			})
		
			diamond.addEventListener('animationend', () => {
				diamond.style.animation = 'none'
			})
			
			
			backgroundContainer.appendChild(diamond)
			backgroundContainer.appendChild(innerD)
		}
	}
}

function removeBackground(){
	Array.from(backgroundContainer.children).forEach((child) => child.remove())
	
	pageInfo.style.display = 'none'
}

const aboutButton = document.querySelector('#about')
aboutButton.addEventListener('click',() => {
	removeBackground()
	
	about.classList.add('show')
	menu.classList.add('focus')
})

const worksButton = document.querySelector('#works')
worksButton.addEventListener('click',() => {
	removeBackground()
	
	works.classList.add('show')
	menu.classList.add('focus')
	list.style.transform = 'translateY(-'+ listItemHeight +'px)'
})

const contactButton = document.querySelector('#contact')
contactButton.addEventListener('click',() => {
	removeBackground()
	
	contact.classList.add('show')
	menu.classList.add('focus')
	
	var cometPos = comet.getBoundingClientRect()
	var menuPos = {top: (windowHeight * 5 / 100) + 86.3/2, left: (windowWidth * 10 / 100)+menu.clientWidth/2}
	console.log({top: menu.clientHeight/2, left:  menu.clientWidth/2})
		
	var adjecent = Math.abs(cometPos.top - menuPos.top)
    var opposite = Math.abs(cometPos.left - menuPos.left)
	var hypotenuse = Math.hypot(adjecent,opposite)
	
	var sinOfAngleX = opposite / hypotenuse
	var deg = Math.asin(sinOfAngleX) * 180/Math.PI
	var rotateBy = 180 - deg + 'deg'
	
	console.log(hypotenuse,menuPos.top,menuPos.left)
	
	comet.style.transform = 'rotate('+ rotateBy +')'
	comet.style.animation = 'fall 0.5s forwards'
	comet.style.animationDelay = '1.2s'
	
	list.style.transform = 'translateY(-'+ listItemHeight*2 +'px)'
})

// const contactButton = document.querySelector('#contact')
// contactButton.addEventListener('click',() => {
	// removeBackground()
	
	// menu.classList.add('focus')
	// list.style.transform = 'translateY(-'+ listItemHeight*3 +'px)'
// })

let tempElement = null
function delayTransition(elemented, bool = false){
	if(!bool){
		tempElement.style.opacity = 1
	}
	else{
		tempElement = elemented
		setTimeout(delayTransition,100)
	}
}