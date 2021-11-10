export default function(username: string) {
    const lengthCheck = document.getElementById('two-chars-long');
    const specialCharsCheck = document.getElementById('no-special-chars');

    if (username.length < 2) {
        lengthCheck?.classList.add('username-error');
    } else {
        lengthCheck?.classList.remove('username-error');
    }

    const allowedChars = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let hasNoSpecialChars = true;

    for (let i = 0; i < username.length; i++) {
        if (!allowedChars.includes(username[i])) hasNoSpecialChars = false;
    };

    if (hasNoSpecialChars) {
        specialCharsCheck?.classList.remove('username-error');
    } else {
        specialCharsCheck?.classList.add('username-error');
    }

    return username;
}