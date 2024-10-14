function monthlySavings(payments, livingCost) {
    const totalIncome = payments.reduce((acc, payment) => acc + payment, 0);

    const totalTax = payments.filter(payment => payment >= 3000).reduce((acc, payment) => acc + (payment * 0.2), 0);

    const netIncome = totalIncome - totalTax;

    const remainingAmount = netIncome - livingCost;

    if (remainingAmount < 0) {
        return "earn more";
    } else {
        return remainingAmount;
    }
}

const payments = [900, 2700,3400]; 
const livingCost = 10000; 

console.log(monthlySavings(payments, livingCost)); 
