// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


let isActive = users
.filter (users => users.isActive === true)
.map(users=> users.name)
let filterh1 = document.createElement ('h1')
filterh1.append('Kata1')
main.append(filterh1)
main.append(JSON.stringify(isActive))

let email = users.map (users => users.email )
let mapH1 = document.createElement ('h1')
mapH1.append('Kata2')
main.append(mapH1)
main.append (JSON.stringify(email))

let company = users.some (users => users.company)
let someH1 = document.createElement ('h1')
someH1.append('Kata3')
main.append(someH1)
main.append(JSON.stringify(someH1))