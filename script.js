document.addEventListener("DOMContentLoaded", function () {

    let friends = ["John", 'Jake', 'Kobi', 'Jingleheimer', 'Schmidt']
    let lines;
    let count;
let button = document.getElementById('button')
button.addEventListener('click', function song99() {
    for (let i = 0; i < friends.length; i++) {
        let divs = document.createElement('div')
        let h3 = document.createElement('h3')
        let br = document.createElement('br')
        divs.className = 'friend'
        h3.textContent = friends[i]
        
        document.body.appendChild(divs)
        divs.appendChild(h3)
        for (count = 99; count > 0; count--) {
            let p =document.createElement('p')
            h3.appendChild(p)
            if (count === 1) {
                lines = "line"
            } else {
                lines = "lines"
            }
            let firstLine = document.createTextNode(`${count} ${lines} of code on the wall `)
            p.appendChild(firstLine)
    
            //let thirdLine = document.createTextNode(` ${count} ${lines} of code `)
            p.append(` ${count} ${lines} of code `);
            
            let fourthLine = document.createTextNode(`The computer of ${friends[i]} went cold and Lo and Behold `)
            p.appendChild(fourthLine);

            if (count === 1) {
                let lastLine = document.createTextNode("No lines of code on the wall")
                p.appendChild(lastLine);
            } else {
                let j = count-1
                let moreLine = document.createTextNode(`${j} ${lines} of code on the wall`)
                p.appendChild(moreLine)
            }


    }
}
}







)}


)