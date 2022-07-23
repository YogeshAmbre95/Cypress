let value = 121

function ReverseValue() {

    let myrevereseValue = value.toString().split(" ").reverse().join(" ")

    let myValue = value.toString()

    if (myValue = myrevereseValue) {

        console.log("Palindrome")
    }
    else {

        console.log("not a palindrome")

    }
}
ReverseValue()