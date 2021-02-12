const menu = document.getElementById('menu')
// header
const header = document.createElement('header')

const logo1 = document.createElement('a')
logo1.setAttribute('class', 'logo')
logo1.setAttribute('href', '/')

const logo2 = document.createElement('div')
logo2.setAttribute('class', 'logoWords')

const logo3 = document.createElement('img')
logo3.setAttribute('src', 'images/logo.svg')
logo3.setAttribute('alt', 'logo')

const mainMenu = document.createElement('nav')
const mainMenu1 = document.createElement('ul')
mainMenu1.setAttribute('class', 'nav__links')

const menuItem1 = document.createElement('li')
const Item1 = document.createElement('a')
Item1.setAttribute('href', '#')
Item1.innerHTML = "Home"

const menuItem2 = document.createElement('li')
const Item2 = document.createElement('a')
Item2.setAttribute('href', '#')
Item2.innerHTML = "Movies"

const menuItem3 = document.createElement('li')
const Item3 = document.createElement('a')
Item3.setAttribute('href', '#')
Item3.innerHTML = "TV Shows"

const menuItem4 = document.createElement('li')
const Item4 = document.createElement('a')
Item4.setAttribute('href', '#')
Item4.innerHTML = "My library"


const contact = document.createElement('a')
contact.setAttribute('class', 'cta')
contact.setAttribute('href', '#')
contact.innerHTML = "Contact"

const menuBut = document.createElement('p')
menuBut.setAttribute('class', 'menu cta')
menuBut.innerHTML = "Menu"

// hamburger menu
const hamburgerDiv1 = document.createElement('div')
hamburgerDiv1.setAttribute('class', 'overlay')

const hamburgerClose = document.createElement('a')
hamburgerClose.setAttribute('class', 'close')
hamburgerClose.innerHTML = "&times;"

const hamburgerDiv2 = document.createElement('div')
hamburgerDiv2.setAttribute('class', 'overlay__content')

// hamburger menu items
const Home = document.createElement('a')
Home.setAttribute('href', '#')
Home.innerHTML = "Home"
const Movies = document.createElement('a')
Movies.setAttribute('href', '#')
Movies.innerHTML = "Movies"
const TVShows = document.createElement('a')
TVShows.setAttribute('href', '#')
TVShows.innerHTML = "TV Shows"
const Mylibrary = document.createElement('a')
Mylibrary.setAttribute('href', '#')
Mylibrary.innerHTML = "My library"

// put all together

// main header & menu

menuItem1.appendChild(Item1)
menuItem2.appendChild(Item2)
menuItem3.appendChild(Item3)
menuItem4.appendChild(Item4)
mainMenu1.appendChild(menuItem1)
mainMenu1.appendChild(menuItem2)
mainMenu1.appendChild(menuItem3)
mainMenu1.appendChild(menuItem4)
mainMenu.appendChild(mainMenu1)

logo2.appendChild(logo3)
logo1.appendChild(logo2)

header.appendChild(logo1)
header.appendChild(mainMenu)
header.appendChild(contact)
header.appendChild(menuBut)

// hamburger menu
hamburgerDiv2.appendChild(Home)
hamburgerDiv2.appendChild(Movies)
hamburgerDiv2.appendChild(TVShows)
hamburgerDiv2.appendChild(Mylibrary)
hamburgerDiv1.appendChild(hamburgerClose)
hamburgerDiv1.appendChild(hamburgerDiv2)



menu.appendChild(header)
menu.appendChild(hamburgerDiv1)