let init = document.querySelector("#init")

data1 = "A base de dados fornecida pela UNICEF, mostra a quantidade de homens e mulheres que concluíram cada etapa escolar, sendo elas “Primary”, “Lower secundary” e “Upper secundary”. Após análises, é possível perceber que alguns países possuem mais homens nos estudos, porém em outros as mulheres estão em maioria. Dessa forma, a média mundial é bem próxima entre os gêneros."
data2 = "No primeiro gráfico, temos a média dos países do globo por grau escolar. Nele, é possível observar que na média as mulheres, proporcionalmente, terminam as três etapas escolares mais do que os homens. Importante observar que mesmo nos países a diferença não é considerável."
data3 = "Já no segundo gráfico, temos, para cada país da base de dados, no eixo horizontal a proporção de garotos que concluíram o ensino e no eixo vertical a proporção de garotas que terminaram o ensino. É importante destacar que em alguns países, as mulheres estudam menos que os homens, porém na média a correlação é positiva, a medida que mais mulheres terminam os estudos, mais homens concluem." 
data4 = "Portanto, os dados nos mostram que a proporção de mulheres que concluíram o ensino é maior que a proporção de homens que concluíram o ensino, comprovando que é um engano acreditar que os garotos tem mais condições de estudar do que as garotas."


init.addEventListener("click",()=>{
	console.log("ok")
	let parent = init.parentNode
	parent.innerHTML = ""
	let quest = document.createElement("div")
	quest.setAttribute("id","quest")
	let text = document.createTextNode("No mundo, os homens estudam proporcionalmente mais do que as mulheres?")
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
			let img1 = document.createElement("img")
			img1.setAttribute("src","img/Imagem2.png")
			let img2 = document.createElement("img")
			img2.setAttribute("src","img/Imagem3.png")

			let div = document.createElement("div")
			div.setAttribute("class","data")
			let div2 = document.createElement("div")
			
			div2.setAttribute("class","dataImg")
			div2.appendChild(img1)
			div2.appendChild(img2)


			text = document.createTextNode(data1)
			let span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data2)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data3)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data4)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			div.appendChild(div2)

			parent.appendChild(div)
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
			let div2 = document.createElement("div")
			
			div2.setAttribute("class","dataImg")
			div2.appendChild(img1)
			div2.appendChild(img2)


			text = document.createTextNode(data1)
			let span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data2)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data3)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data4)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

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
			let img1 = document.createElement("img")
			img1.setAttribute("src","img/Imagem2.png")
			let img2 = document.createElement("img")
			img2.setAttribute("src","img/Imagem3.png")

			let div = document.createElement("div")
			div.setAttribute("class","data")
			let div2 = document.createElement("div")
			
			div2.setAttribute("class","dataImg")
			div2.appendChild(img1)
			div2.appendChild(img2)


			text = document.createTextNode(data1)
			let span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data2)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data3)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			text = document.createTextNode(data4)
			span = document.createElement("span")
			span.appendChild(text)
			div.appendChild(span)
			div.appendChild(document.createElement("br"))

			div.appendChild(div2)

			parent.appendChild(div)
		}
	})
})

