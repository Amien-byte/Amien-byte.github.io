const windowWidth = screen.availWidth
const windowHeight = screen.availHeight
const backgroundContainer = document.querySelector('.background')
const dist = 3;


background()

function background(){	
	
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