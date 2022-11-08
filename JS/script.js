{
const welcome = () => {
    console.log("Witaj w ksoli developerze");
};

welcome();

const calculateResult = (amount, currency) => {
    const reatePLN = 1.00;
    const rateEUR = 4.64;
    const rateUSD = 4.77;
    const rateGBP = 5.37;

    switch (currency) {
        case "PLN":
            return amount / reatePLN;

        case "EUR":
            return amount / rateEUR;

        case "USD":
            return amount / rateUSD;

        case "GBP":
            return amount / rateGBP;
    }
};

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = ` ${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    function init() {
        const formElement = document.querySelector(".main_form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}