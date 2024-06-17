const digits = document.querySelectorAll(".digit")
const operations = document.querySelectorAll(".operation")
const input = document.querySelector("input")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const delete_button = document.querySelector(".delete")
const dot = document.querySelector(".dot")
let operation = ""
let first_number = ""
let second_number = ""
console.log(operation)
console.log(digits)
console.log(operations)
console.log(operations[9])

digits.forEach(
    (d) => {
        d.addEventListener("click", (e) => {
            console.log(e)
            console.log(d)
            input.value += d.innerText
        })
    }
)

operations.forEach(
    (o) => {
        o.addEventListener("click", () => {
            operation = o.textContent
            console.log(operation)
            if(first_number == "") {
                first_number = input.value       
            } else {
                input.value = ERROR
                first_number = ""
                second_number = ""
                operation = ""
            }
        })
    }
)

equal.addEventListener("click", () => {
    second_number = input.value

})

clear.addEventListener("click", () => {
    input.value = ""
    first_number = ""
    second_number = ""
    operation = ""

})
delete_button.addEventListener("click", () => input.value = input.value.slice(0, input.value.length - 1))
dot.addEventListener("click", () => input.value += ".")