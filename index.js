function generatePassword(length,lowercase,uppercase,number,symbol) 
{
    let allowed = '';
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NUMBERS = "0123456789";
    const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

    if (lowercase) allowed += LOWERCASE;
    if (uppercase) allowed += UPPERCASE;
    if (number) allowed += NUMBERS;
    if (symbol) allowed += SYMBOLS;

    let password = [];
   if(length<8)
   {

       return 'passwordinvalid';
   }
    if (lowercase) password.push(LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)]);
    if (uppercase) password.push(UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)]);
    if (number) password.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
    if (symbol) password.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);

  while (password.length < length) 
    {
        let char;
        do {
            const index = Math.floor(Math.random() * allowed.length);
            char = allowed[index];
        } while (password[password.length - 1] === char);

        password.push(char);
    }
   for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join("");
}


document.getElementById("generateBtn").onclick = function () {

    let length = prompt("Enter password length (minimum 8):");

    length = parseInt(length);

    if (isNaN(length) || length < 8) {
        alert("Invalid length. Please enter a number ≥ 8.");
        return;
    }

    const pwd = generatePassword(length, true, true, true, true);

    document.getElementById("passwordOutput").innerText = pwd;
};
