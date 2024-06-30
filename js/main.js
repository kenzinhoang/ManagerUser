// let list = [{
//     name: "admin",
//     gender: true,
//     group: "A",
//     email: "admin@gmail.com",
//     phone: 123345678,
//     jplevel: "N2",
//     scores: 90
// }]
// localStorage.setItem("list", JSON.stringify(list))

let userList = JSON.parse(localStorage.getItem("list"))
function renderData(userL) {
    let user = ""
    for (let i in userL) {
        user += `
                <tr>
                    <th scope="row">${Number(i) + 1}</th>
                    <td>${userL[i].name}</td>
                    <td>${userL[i].gender ? "Male" : "Female"}</td>
                    <td>${userL[i].group}</td>
                    <td>${userL[i].email}</td>
                    <td>${userL[i].phone}</td>
                    <td>${userL[i].jplevel}</td>
                    <td>${userL[i].scores}</td>
                
                </tr>`
    }
    document.querySelector(".tbody").innerHTML = user
}
renderData(userList)

function addUser() {
    let name = document.querySelector("#fullname").value
    let male = document.querySelector("#male").value
    let female = document.querySelector("#female").value
    let group = document.querySelector("#group").value
    let mail = document.querySelector("#mail").value
    let tel = document.querySelector("#telnumber").value
    let level = document.querySelector("#japanlevel").value
    let mark = document.querySelector("#marks").value


    let newUser = {
        name: document.querySelector("#fullname").value,
        gender: check(),
        group: document.querySelector("#group").value,
        email: document.querySelector("#mail").value,
        phone: document.querySelector("#telnumber").value,
        jplevel: document.querySelector("#japanlevel").value,
        scores: document.querySelector("#marks").value
    }
    userList.push(newUser)
    localStorage.setItem("list", JSON.stringify(userList))

    renderData(userList)

}

function check() {
    let male = document.querySelector("#male")
    let female = document.querySelector("#female")

    if (male.checked) {
        female.unchecked
        return true
    } else if (female.checked) {
        return false
    }
}