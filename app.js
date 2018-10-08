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

secondBar = document.createElement("div")
secondBar.className = "second_bar"
container.appendChild(secondBar)

curse = document.createElement("div")
curse.className = "curse"
curse.innerHTML = "Curse of the Current Reviews"
secondBar.appendChild(curse)

smallText = document.createElement("div")
smallText.className = "smalltext"
smallText.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependant on three important factors: price, screenshot and reviews."
secondBar.appendChild(smallText)

mid1Top = document.createElement("div")
mid1Top.className = "mid1"
mid1Top.innerHTML = "Hello WatchKit"
container.appendChild(mid1Top)

mid2Top = document.createElement("div")
mid2Top.className = "mid2"
mid2Top.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
container.appendChild(mid2Top)

mid3Top = document.createElement("div")
mid3Top.className = "mid3"
mid3Top.innerHTML = "12 comments&nbsp;&nbsp;&nbsp;124 likes"
container.appendChild(mid3Top)

mid1Bottom = document.createElement("div")
mid1Bottom.className = "mid1"
mid1Bottom.innerHTML = "Introduction to Swift"
container.appendChild(mid1Bottom)

mid2Bottom = document.createElement("div")
mid2Bottom.className = "mid2"
mid2Bottom.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still ib development but it clearly reflects the intentions and the future direction. This article will revolve arround the basic concepts in the Swift language and how you can get started."
container.appendChild(mid2Bottom)

mid3Bottom = document.createElement("div")
mid3Bottom.className = "mid3"
mid3Bottom.innerHTML = "15 comments&nbsp;&nbsp;&nbsp;45 likes"
container.appendChild(mid3Bottom)
