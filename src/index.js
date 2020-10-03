module.exports = function check(str, bracketsConfig) {
    let isChecking = true;

    while (isChecking) {
        isChecking = false;

        for (let i = 0; i < bracketsConfig.length; i++) {
            const newStr = str.split(
                bracketsConfig[i][0] + bracketsConfig[i][1]
            );

            if (newStr.length > 1) {
                isChecking = true;
                str = newStr.join("");
            }
        }
    }
    return !str;
};
