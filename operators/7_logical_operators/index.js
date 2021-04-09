// Logical Operators

function debugExample(income, creditScore, loan) {
    console.log(
        'highIncome:', income, 
        'goodCreditScore:', creditScore, 
        'Customer eligible for loan?:', loan);
}

// Logical AND (&&)
console.log(
    'Logical AND:', 
    'true && true:', 
    true && true, 
    'true && false:', 
    true && false, 
    'false && true:', 
    false && true, 
    'false && false:', 
    false && false);

console.log(
    'Logical AND example:', 
    'Customer must be high income and have good credit score');
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

debugExample(highIncome, goodCreditScore, eligibleForLoan);

// Logical OR (||)
console.log(
    'Logical OR:', 
    'true || true:', 
    true || true, 
    'true || false:', 
    true || false, 
    'false || true:', 
    false || true, 
    'false || false:', 
    false || false);

console.log(
    'Logical OR example:', 
    'Customer must be high income or have good credit score');
highIncome = true;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;

debugExample(highIncome, goodCreditScore, eligibleForLoan);

// NOT (!)
console.log(
    'Logical NOT:', 
    '!true:', 
    !true, 
    '!false:', 
    !false);

console.log(
    'Logical NOT example:', 
    'Customer must be high income or have good credit score');
highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
debugExample(highIncome, goodCreditScore, eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log('Loan applciation refused?:', applicationRefused)