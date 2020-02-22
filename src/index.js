module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];

    const decimals = [
        "",
        "",
        "twen",
        "thir",
        "for",
        "fif",
        "six",
        "seven",
        "eigh",
        "nine"
    ];

    const specials = ["ten", "eleven", "twelve", "thirteen", "fourteen"];

    let result = "";

    if (number / 100 >= 1) {
        const hundred = Math.floor(number / 100);
        result += units[hundred] + " hundred";
        number -= hundred * 100;
    }

    if (number / 10 >= 1) {
        if (number - 10 >= 0 && number - 10 <= 4) {
            return (result += ` ${specials[number - 10]}`).trim();
        }
        if (number - 10 >= 5 && number - 10 <= 9) {
            return (result += ` ${decimals[number - 10]}teen`).trim();
        }
        const decimal = Math.floor(number / 10);
        result += ` ${decimals[decimal]}ty`;
        number -= decimal * 10;
    }

    if (number > 0) {
        result += ` ${units[number]}`;
    }

    return result.trim();
};
