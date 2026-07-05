let balance = 50000;

const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const historyList = document.getElementById("historyList");

function updateBalance() {
    balanceDisplay.textContent =
        "₹" + balance.toLocaleString("en-IN");
}

function addHistory(text) {
    const li = document.createElement("li");
    li.textContent = text;
    historyList.prepend(li);
}

document.querySelector(".deposit").addEventListener("click", () => {

    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    balance += amount;
    updateBalance();

    addHistory(
        `💰 Deposited ₹${amount.toLocaleString("en-IN")}`
    );

    amountInput.value = "";
});

document.querySelector(".withdraw").addEventListener("click", () => {

    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    if (amount > balance) {
        alert("Insufficient Balance");
        return;
    }

    balance -= amount;
    updateBalance();

    addHistory(
        `💸 Withdrawn ₹${amount.toLocaleString("en-IN")}`
    );

    amountInput.value = "";
});

document.querySelector(".history").addEventListener("click", () => {
    document
        .getElementById("historyPanel")
        .scrollIntoView({
            behavior: "smooth"
        });
});

updateBalance();

addHistory("🚀 ATM System Started");