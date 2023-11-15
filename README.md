# currency converter

Website prepared for the [YouCode](https://youcode.pl/frontend-developer-od-podstaw/) course.
![youcode-logo](https://youcode.pl/wp-content/uploads/2022/02/youcode-logo-ukraine.png)

Website have default polish language.

This is simple project, used to convert currencies from PLN to USD / EUR / GBP.

Try it by yourself: >>https://mateuszbryczek.github.io/currency-converter/<<

![](images/currency-converter-gif.gif)
## Code fragment:

```javascript
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
```
## Tools used:
- HTML
- CSS
- Javascript
- Normalize.css
- Open Graph Protocol

### Current goals:
- increasing the amount of currencies available to choose from.
- adding the possibility of converting **from** any currency.