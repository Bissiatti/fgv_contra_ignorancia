let init = document.querySelector("#init")

data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et volutpat lacus, a ornare leo. Nulla facilisis nulla eu urna laoreet placerat. Sed justo nulla, egestas vitae leo at, scelerisque euismod libero. Integer eget purus eleifend lacus efficitur imperdiet. Ut gravida nisl ac felis faucibus, lobortis eleifend diam aliquet. Aenean quis varius ex, et venenatis urna. Vivamus dignissim quis tellus sit amet interdum. Maecenas lacus quam, semper a aliquam ac, fringilla non tellus. Nunc et mauris leo. Praesent ultrices viverra erat nec semper. Fusce rutrum porta ante, ac vehicula sem facilisis vitae. Duis ultrices tristique sapien, eget vulputate dolor maximus sed. Duis vehicula consequat mauris, vel ullamcorper enim. Mauris sit amet tincidunt metus. Phasellus faucibus mollis magna in tempus. Nullam accumsan, nibh ut eleifend dictum, mi lectus vehicula dolor, tempor semper lectus leo eget lorem."



init.addEventListener("click",()=>{
	console.log("ok")
	let parent = init.parentNode
	parent.innerHTML = ""
	let quest = document.createElement("div")
	quest.setAttribute("id","quest")
	let text = document.createTextNode("No mundo, os homens estudam mais tempo do que as mulheres?")
	quest.appendChild(text)
	parent.appendChild(quest)

	let a1 = document.createElement("button")
	a1.setAttribute("class","opt")
	text = document.createTextNode("Sim, os homens estudam muito mais")
	a1.appendChild(text)
	parent.appendChild(a1)

	a1.addEventListener("click",()=>{
		parent.innerHTML = ""
		let result = document.createElement("div")
		result.setAttribute("class","result")
		text = document.createTextNode("Infelizmente seus conhecimentos estão equivocados, os dados da UNICEF mostram que ambos estudam praticamente a mesma quantidade")
		result.appendChild(text)
		parent.appendChild(result)
		setTimeout(fun1, 4000); 
		function fun1(){
			parent.innerHTML = ""
		}
		
	})

	let a2 = document.createElement("button")
	a2.setAttribute("class","opt")
	text = document.createTextNode("Não, as mulheres estudam muito mais")
	a2.appendChild(text)
	parent.appendChild(a2)

	a2.addEventListener("click",()=>{
		parent.innerHTML = ""
		let result = document.createElement("div")
		result.setAttribute("class","result")
		text = document.createTextNode("Infelizmente seus conhecimentos estão equivocados, os dados da UNICEF mostram que ambos estudam praticamente a mesma quantidade")
		result.appendChild(text)
		parent.appendChild(result)
		setTimeout(fun1, 4000); 
		function fun1(){
			parent.innerHTML = ""
			let img1 = document.createElement("img")
			img1.setAttribute("src","img/Imagem2.png")
			let img2 = document.createElement("img")
			img2.setAttribute("src","img/Imagem3.png")

			let div = document.createElement("div")
			div.setAttribute("class","data")
			text = document.createTextNode(data)
			let span = document.createElement("span")
			let div2 = document.createElement("div")
			div2.setAttribute("class","dataImg")

			span.appendChild(text)
			div2.appendChild(img1)
			div2.appendChild(img2)

			div.appendChild(span)
			div.appendChild(div2)

			parent.appendChild(div)
		}
	})

	let a3 = document.createElement("button")
	a3.setAttribute("class","opt")
	text = document.createTextNode("Na média, ambos estudam a mesma quantidade")
	a3.appendChild(text)
	parent.appendChild(a3)
	

	a3.addEventListener("click",()=>{
		parent.innerHTML = ""
		let result = document.createElement("div")
		result.setAttribute("class","result")
		text = document.createTextNode("Parabéns, seus conhecimentos condizem com a realidade.")
		result.appendChild(text)
		parent.appendChild(result)
		setTimeout(fun1, 4000); 
		function fun1(){
			parent.innerHTML = ""
		}
	})
})

