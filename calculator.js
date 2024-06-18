const digits = document.querySelectorAll(".digit")
const operations = document.querySelectorAll(".operation")
const string_operations = ["+", "-", "x", "%"]
const input = document.querySelector("input")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const delete_button = document.querySelector(".delete")
const dot = document.querySelector(".dot")
let operation = ""
let first_number = ""
let second_number = ""

digits.forEach(
    (d) => {
        d.addEventListener("click", () => {
            if (string_operations.includes(input.value)) {
                input.value = ""
                input.value += d.innerText
            } else {
                input.value += d.innerText
            }
        })
    }
)

operations.forEach(
    (o) => {
        o.addEventListener("click", () => {
            operation = o.textContent
            first_number = input.value       
            input.value = operation
        })
    }
)

equal.addEventListener("click", () => {
    second_number = input.value
    first_number = Number(first_number)
    second_number = Number(second_number)

    switch(operation) {
        case "+":
            input.value = `${first_number + second_number}`
            break
        case "-":
            input.value = `${first_number - second_number}`
            break
        case "x":
            input.value = `${first_number * second_number}`
            break
        case "%":
            input.value = `${first_number / second_number}` 
            break
    }

    const result = input.value
    first_number = result
    second_number = ""
    operation = ""
})

clear.addEventListener("click", () => {
    input.value = ""
    first_number = ""
    second_number = ""
    operation = ""
})

delete_button.addEventListener("click", () => input.value = input.value.slice(0, input.value.length - 1))
dot.addEventListener("click", () => input.value += ".")