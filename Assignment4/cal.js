function calculateMoney(numTickets) {
    const ticketPrice = 120;
    const daroanSalary = 500;
    const staffNum = 8;
    const lunchCostPerStaff = 50;

    const totalRevenue = numTickets * ticketPrice;

    const totalExpenses = daroanSalary + ( staffNum * lunchCostPerStaff);

    const amountLeft = totalRevenue - totalExpenses;

    return amountLeft;
}
const TicketsSold = 50;
const remainingAmount = calculateMoney(TicketsSold);
console.log("Total amount left after deducting expenses: Tk", remainingAmount);
