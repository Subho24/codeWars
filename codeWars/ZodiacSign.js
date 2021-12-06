function zodiacCheck(input) {
    if (input[1] === 1) {
        if (input[0] <= 19) {
            console.log("Your zodiac sign is Capricornus")
        } else if ((input[0] >= 20) && (input[0] < 31)) {
            console.log("Your zodiac sign is Aquarius")
        }
    }
    if (input[1] === 2) {
        if (input[0] <= 18) {
            console.log("Your zodiac sign is Aquarius")
        } else if ((input[0] >= 19) && (input[0] < 28)) {
            console.log("Your zodiac sign is Pisces")
        }
    }
    if (input[1] === 3) {
        if (input[0] <= 20) {
            console.log("Your zodiac sign is Pisces")
        } else if ((input[0] >= 20) && (input[0] < 31)) {
            console.log("Your zodiac sign is Aries")
        }
    }
    if (input[1] === 4) {
        if (input[0] <= 19) {
            console.log("Your zodiac sign is Aries")
        } else if ((input[0] >= 20) && (input[0] < 30)) {
            console.log("Your zodiac sign is Taurus")
        }
    }
    if (input[1] === 5) {
        if (input[0] <= 20) {
            console.log("Your zodiac sign is Taurus")
        } else if ((input[0] >= 21) && (input[0] < 31)) {
            console.log("Your zodiac sign is Gemini")
        }
    }
    if (input[1] === 6) {
        if (input[0] <= 22) {
            console.log("Your zodiac sign is Gemini")
        } else if ((input[0] >= 23) && (input[0] < 30)) {
            console.log("Your zodiac sign is Cancer")
        }
    }
    if (input[1] === 7) {
        if (input[0] <= 22) {
            console.log("Your zodiac sign is Cancer")
        } else if ((input[0] >= 23) && (input[0] < 31)) {
            console.log("Your zodiac sign is Leo")
        }
    }
    if (input[1] === 8) {
        if (input[0] <= 23) {
            console.log("Your zodiac sign is Leo")
        } else if ((input[0] >= 24) && (input[0] < 31)) {
            console.log("Your zodiac sign is Virgo")
        }
    }
    if (input[1] === 9) {
        if (input[0] <= 22) {
            console.log("Your zodiac sign is Virgo")
        } else if ((input[0] >= 23) && (input[0] < 30)) {
            console.log("Your zodiac sign is Libra")
        }
    }
    if (input[1] === 10) {
        if (input[0] <= 23) {
            console.log("Your zodiac sign is Libra")
        } else if ((input[0] >= 24) && (input[0] < 31)) {
            console.log("Your zodiac sign is Scorpius")
        }
    }
    if (input[1] === 11) {
        if (input[0] <= 21) {
            console.log("Your zodiac sign is Scorpius")
        } else if ((input[0] >= 22) && (input[0] <= 30)) {
            console.log("Your zodiac sign is Sagittarius")
        }
    }
    if (input[1] === 12) {
        if (input[0] <= 21) {
            console.log("Your zodiac sign is Sagittarius")
        } else if ((input[0] >= 22) && (input[0] < 31)) {
            console.log("Your zodiac sign is Capricornus")
        }
    }
}

zodiacCheck([01, 12])