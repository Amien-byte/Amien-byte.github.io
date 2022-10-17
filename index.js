const windowWidth = screen.availWidth
const windowHeight = screen.availHeight
const backgroundContainer = document.querySelector('.background')
const dist = 3;


background()
backgroundEcho()

function backgroundEcho(){	
	const diamonds = Array.from(document.querySelectorAll('.diamond'))
	
	diamonds.forEach((diamond) => 
		diamond.addEventListener('click', () => {
			diamond.style.backgroundColor = 'white'
			
			for(let i = 1; i<=dist; i++){
				diamonds.filter((d) =>(
					(d.position.y === diamond.position.y - i && d.position.x === diamond.position.x) || 
					(d.position.y === diamond.position.y + i && d.position.x === diamond.position.x) ||
					(d.position.x === diamond.position.x - i && d.position.y === diamond.position.y) ||
					(d.position.x === diamond.position.x + i && d.position.y === diamond.position.y) 
					))
				.forEach((d) => {
					d.style.backgroundColor = 'white'
					d.style.transitionDelay = i*0.7+'s'
				})
			}
		})
	)
	
}

function background(){	
	
	for(let usedWidth = 0; usedWidth < windowWidth; usedWidth += 70){
		for(let usedHeight = 0; usedHeight < windowHeight; usedHeight += 70){
			let diamond = document.createElement('div')
			diamond.classList.add('diamond')
			diamond.style.left = usedWidth + 'px'
			diamond.style.top = usedHeight + 'px'
			
			diamond.position = {
				x: usedWidth/70,
				y: usedHeight/70
			}
			
			// diamond.addEventListener('click', (mm) => {
				// console.log(mm)
				// const diamonds = document.querySelectorAll
				// for(let i = 1; i<=dist; i++){
					
				// }
				// mm.srcElement.style.backgroundColor = 'white'
			// })
			
			backgroundContainer.appendChild(diamond)
		}
	}
}