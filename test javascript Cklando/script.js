const searchInput = document.querySelector('#search')
const tableResults = document.querySelector('.table-result')
const tableHeader = document.querySelector('.header')

const emptyResult = document.querySelector('.empty-result')
const loader = document.querySelector('.loader-container')
let dataArray = []

/*----------------------------------------------------------------------------------------------------------------*/

async function getUsers() {
    const users = await fetch('https://randomuser.me/api/?nat=us&results=50', {
                                                                                headers: {
                                                                                    Accept: 'application/json'
                                                                                }})
    if (users.ok) {
        const { results } = await users.json()
        return results
    }

    throw new Error(`Erreur serveur `, {cause: users})
}

/*----------------------------------------------------------------------------------------------------------------*/

/**
 * 
 * @param {HTMLElement} tagName 
 * @param {Object} attributes 
 * @returns {HTMLElement}
 */

function createElement(tagName, attributes = {}, content = '') {
    const element = document.createElement(tagName)
    for (const [attributeName, attributeValue] of Object.entries(attributes)) {
        element.setAttribute(attributeName, attributeValue)
    }
    element.textContent = content
    return element
}

/*----------------------------------------------------------------------------------------------------------------*/

/**
 * 
 * @param {Object} picture 
 * @param {string} name 
 * @param {string} email 
 * @param {string} cell 
 * @returns {HTMLElement}
 */

function createUser(picture, name, email, cell) {
    const div = createElement('div', { class: 'table-item' })
    
    const username = createElement('span', { class:'username' }, name)
    const img = createElement('img', { src: picture})
    username.prepend(img)

    const userEmail = createElement('span', { class:'email' }, email)
    const userPhone = createElement('span', { class: 'phone' }, cell)

    div.append(username)
    div.append(userEmail)
    div.append(userPhone)

    return div
}

/*----------------------------------------------------------------------------------------------------------------*/

/**
 * @param {Array} data 
 * @returns {Array}
 */
function sortData(data) {
    const dataSorted =  data.sort((a, b) => {
        if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
            return -1
        }

        if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            return 1
        }

        return 0        
    })

    return dataSorted
}

/*----------------------------------------------------------------------------------------------------------------*/

const users = getUsers()

users.then(showData)

function showData(users) {
    loader.style.display = 'none'
    tableHeader.style.display = 'grid'

    const dataSorted = sortData(users)

    dataSorted.forEach(user => {
        const { cell, email, name, picture } = user
        const newUser = createUser(picture.medium, `${name.last + ' ' + name.first}`, email, cell)
        tableResults.append(newUser)
        dataArray.push(user)
    });
}

function filterData() {
    if (searchInput.value === '') {
        users.then(showData)
        return
    }

    tableResults.innerHTML = ''
    const filterArray = dataArray.filter((user) => user.name.last.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                                                   user.name.first.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                                                   `${user.name.last.toLowerCase() + ' ' + user.name.first.toLowerCase()}`.includes(searchInput.value.toLowerCase()) ||
                                                   `${user.name.first.toLowerCase() + ' ' + user.name.last.toLowerCase()}`.includes(searchInput.value.toLowerCase())
                                        )

    if (filterArray.length == 0) {
        emptyResult.classList.add('active')
        tableResults.append(emptyResult)
        return
    }

    emptyResult.classList.remove('active')
    const filterArraySorted = sortData(filterArray)

    for (const user of filterArraySorted) {
        const { cell, email, name, picture } = user
        const newUser = createUser(picture.medium, `${name.last + ' ' + name.first}`, email, cell)
        tableResults.append(newUser)
    }
}

searchInput.addEventListener('input', filterData)

