let container = document.getElementById("container")


let blueBar = document.createElement("div")
blueBar.className = "bluebar"
container.appendChild(blueBar)

h1header = document.createElement("span")
h1header.className = "first"
h1header.innerHTML = "HighonCoding"
blueBar.appendChild(h1header)

second = document.createElement("span")
second.className = "second"
blueBar.appendChild(second)
let firstLink = document.createElement("a")
firstLink.href = "index.html"
firstLink.innerHTML = "Home"
second.appendChild(firstLink)

third = document.createElement("span")
third.className = "third"
blueBar.appendChild(third)
let secondLink = document.createElement("a")
secondLink.href = "categories.html"
secondLink.innerHTML = "Categories"
third.appendChild(secondLink)

cellArea = document.createElement("div")
cellArea.className = "cell_area"
container.appendChild(cellArea)

cell = document.createElement("div")
cell.className = "cell"
cellArea.appendChild(cell)

cellTitle1 = document.createElement("div")
cellTitle1.className = "cell_title"
cellTitle1.innerHTML = "Javascript"
cell.appendChild(cellTitle1)

cellArticles1 = document.createElement("div")
cellArticles1.className = "cell_articles"
cellArticles1.innerHTML = "15 articles"
cell.appendChild(cellArticles1)

cell2 = document.createElement("div")
cell2.className = "cell"
cellArea.appendChild(cell2)

cellTitle2 = document.createElement("div")
cellTitle2.className = "cell_title"
cellTitle2.innerHTML = "C#"
cell2.appendChild(cellTitle2)

cellArticles2 = document.createElement("div")
cellArticles2.className = "cell_articles"
cellArticles2.innerHTML = "12 articles"
cell2.appendChild(cellArticles2)

cell3 = document.createElement("div")
cell3.className = "cell"
cellArea.appendChild(cell3)

cellTitle3 = document.createElement("div")
cellTitle3.className = "cell_title"
cellTitle3.innerHTML = "Swift/Objc"
cell3.appendChild(cellTitle3)

cellArticles3 = document.createElement("div")
cellArticles3.className = "cell_articles"
cellArticles3.innerHTML = "34 articles"
cell3.appendChild(cellArticles3)

cell4 = document.createElement("div")
cell4.className = "cell"
cellArea.appendChild(cell4)

cellTitle4 = document.createElement("div")
cellTitle4.className = "cell_title"
cellTitle4.innerHTML = "Database"
cell4.appendChild(cellTitle4)

cellArticles4 = document.createElement("div")
cellArticles4.className = "cell_articles"
cellArticles4.innerHTML = "15 articles"
cell4.appendChild(cellArticles4)

cell5 = document.createElement("div")
cell5.className = "cell"
cellArea.appendChild(cell5)

cellTitle5 = document.createElement("div")
cellTitle5.className = "cell_title"
cellTitle5.innerHTML = "Python"
cell5.appendChild(cellTitle5)

cellArticles5 = document.createElement("div")
cellArticles5.className = "cell_articles"
cellArticles5.innerHTML = "33 articles"
cell5.appendChild(cellArticles5)

cell6 = document.createElement("div")
cell6.className = "cell"
cellArea.appendChild(cell6)

cellTitle6 = document.createElement("div")
cellTitle6.className = "cell_title"
cellTitle6.innerHTML = "VB.net"
cell6.appendChild(cellTitle6)

cellArticles6 = document.createElement("div")
cellArticles6.className = "cell_articles"
cellArticles6.innerHTML = "5 articles"
cell6.appendChild(cellArticles6)
