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
const book = document.querySelector('.book')
const listItemHeight = 71.3


setBackground()

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
			
			diamond.addEventListener('mouseover', (d) => {
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

function setLuminousBG(){
	const glow = document.createElement('div')
	const film = document.createElement('div')
	const grad = document.createElement('div')
	glow.classList.add('glow')
	film.classList.add('film')
	grad.classList.add('grad')
	film.addEventListener('mousemove', (d) => {
		glow.style.top = d.clientY + 'px'
		glow.style.left = d.clientX + 'px'
	})
	
	backgroundContainer.appendChild(grad)
	backgroundContainer.appendChild(glow)
	backgroundContainer.appendChild(film)
	
	for(let usedWidth = -70; usedWidth < windowWidth; usedWidth += 70){
		for(let usedHeight = -70	; usedHeight < windowHeight; usedHeight += 70){
			let diamond = document.createElement('div')
			diamond.classList.add('diamond')
			diamond.style.left = usedWidth + 'px'
			diamond.style.top = usedHeight + 'px'
			diamond.style.width = '48px'
			diamond.style.height = '48px'
			
			let diagDiamond = document.createElement('div')
			diagDiamond.classList.add('diamond')
			diagDiamond.style.left = (usedWidth + 35) + 'px'
			diagDiamond.style.top = (usedHeight + 35) + 'px'
			diagDiamond.style.width = '48px'
			diagDiamond.style.height = '48px'
				
			
			backgroundContainer.appendChild(diamond)
			backgroundContainer.appendChild(diagDiamond)
		}
	}
}

function removeBackground(){
	Array.from(document.querySelectorAll('.diamond')).forEach((child) => child.remove())
	Array.from(document.querySelectorAll('.innerD')).forEach((child) => child.remove())
	
	
	var temp = document.querySelector('.glow')
	if(temp){
		temp.remove()
		document.querySelector('.film').remove()
	}
	
		
	about.classList.remove('show')
	works.classList.remove('show')
	contact.classList.remove('show')
	
	pageInfo.style.display = 'none'
}

book.addEventListener('click', () => {
	document.querySelector('.front-cover').style.transform = 'perspective(1000px) rotateY(-180deg)'
	const pop = document.querySelector('.front-cover')
	delayTransition(pop,true)
	document.querySelector('.back-cover').style.background = '#008000'
})

const aboutButton = document.querySelector('#about')
const aboutMiniButton = document.querySelector('#m-about')
aboutButton.addEventListener('click',toAbout)
aboutMiniButton.addEventListener('click',toAbout)

function toAbout(){
	removeBackground()
	setLuminousBG()
	
	about.classList.add('show')
	menu.classList.add('focus')
	list.style.transform = 'translateY(-'+ listItemHeight * 0 +'px)'
}

const worksButton = document.querySelector('#works')
const worksMiniButton = document.querySelector('#m-works')
worksButton.addEventListener('click',toWorks)
worksMiniButton.addEventListener('click',toWorks)

function createComet(x, menuPos){
	let pos = [];
	for(let i=0; i<x; i++){
		let comet = document.createElement('div')
		let x = Math.floor(Math.random() * windowWidth) 
		let y = Math.floor(Math.random() * windowHeight) + menuPos.top
		
		comet.classList.add('comet')
		comet.style.left = x + 'px'
		comet.style.top = y + 'px'
		
		pos.push({top: y, left:x})
		
		backgroundContainer.appendChild(comet)
	}
	return pos;
}

function toWorks(){
	removeBackground()
	
	works.classList.add('show')
	menu.classList.add('focus')
	
	const x = 20
	
	const menuPos = {top: (windowHeight * 5 / 100) + 86.3/2, left: (windowWidth * 10 / 100)+menu.clientWidth/2}
	const pos = createComet(x, menuPos)
	const comets = document.querySelectorAll('.comet')
	

	for(let i=0; i<x; i++){
		let comet = comets[i]
		
		var cometPos = pos[i]
		
		var opposite = 0
		var adjecent = 0
		
		if(cometPos.left < menuPos.left){
			opposite = Math.abs(cometPos.top - menuPos.top)
			adjecent = Math.abs(cometPos.left - menuPos.left)
			
		}else{
			adjecent = Math.abs(cometPos.top - menuPos.top)
			opposite = Math.abs(cometPos.left - menuPos.left)
		}
		
		var hypotenuse = Math.hypot(adjecent,opposite)
		
		var sinOfAngleX = opposite / hypotenuse
		var deg = Math.asin(sinOfAngleX) * 180/Math.PI
		var rotateBy = (cometPos.left < menuPos.left) ? 270 - deg + 'deg' : 180 - deg + 'deg'
		
		comet.style.setProperty('--dist', hypotenuse + 'px')
		comet.style.setProperty('--fromX', cometPos.top + 'px')
		comet.style.setProperty('--fromY', cometPos.left + 'px')
		comet.style.setProperty('--toX', menuPos.top + 'px')
		comet.style.setProperty('--toY', menuPos.left + 'px')
		
		comet.style.transform = 'rotate('+ rotateBy +')'
		comet.style.animation = 'fall 1s forwards'
		comet.style.animationDelay = '1.2s'
	}
	
	list.style.transform = 'translateY(-'+ listItemHeight +'px)'
}

const contactButton = document.querySelector('#contact')
contactButton.addEventListener('click',toContacts)

function toContacts(){
	removeBackground()
	
	contact.classList.add('show')
	menu.classList.add('focus')
	
	list.style.transform = 'translateY(-'+ listItemHeight*2 +'px)'
}


let tempElement = null
function delayTransition(elemented, bool = false){
	if(!bool){
		tempElement.style.setProperty('--backPage', 'visible')
	}
	else{
		tempElement = elemented
		setTimeout(delayTransition,400)
	}
}