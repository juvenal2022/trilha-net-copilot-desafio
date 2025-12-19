// Function to validate credit card number and determine the brand
function validateCreditCard(cardNumber) {
    // Remove spaces and dashes
    cardNumber = cardNumber.replace(/\s|-/g, '');

    // Check if it's all digits and length between 13-19
    if (!/^\d{13,19}$/.test(cardNumber)) {
        return { valid: false, bandeira: null };
    }

    // Luhn algorithm
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    const valid = sum % 10 === 0;

    // Determine bandeira
    let bandeira = null;
    if (cardNumber.startsWith('4')) {
        bandeira = 'Visa';
    } else if (cardNumber.startsWith('50')) {
        bandeira = 'Aura';
    } else if (cardNumber.startsWith('2014') || cardNumber.startsWith('2149')) {
        bandeira = 'EnRoute';
    } else if (cardNumber.startsWith('5') || cardNumber.startsWith('2')) {
        bandeira = 'Mastercard';
    } else if (cardNumber.startsWith('35')) {
        bandeira = 'JCB';
    } else if (cardNumber.startsWith('3')) {
        if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
            bandeira = 'American Express';
        } else {
            bandeira = 'Diners Club';
        }
    } else if (cardNumber.startsWith('6062')) {
        bandeira = 'Hipercard';
    } else if (cardNumber.startsWith('6')) {
        bandeira = 'Discover';
    } else if (cardNumber.startsWith('8699')) {
        bandeira = 'Voyager';
    }

    return { valid, bandeira };
}

// Example usage
console.log(validateCreditCard('4929 7489 0788 8931')); // Visa, valid
console.log(validateCreditCard('5330 1215 4455 5323')); // Mastercard, valid
console.log(validateCreditCard('3410 050901 02176')); // American Express, valid
console.log(validateCreditCard('3809 297503 5018')); // Diners Club
console.log(validateCreditCard('86997 8015 63353 7')); // Voyager
console.log(validateCreditCard('6011 0677 1562 4717')); // Discover
console.log(validateCreditCard('6062 8264 4174 7300')); // Hipercard
console.log(validateCreditCard('2149 4279313 2676')); // EnRoute
console.log(validateCreditCard('5056 3139 0403 9657')); // Aura
console.log(validateCreditCard('3567 3298 5722 9720')); // JCB