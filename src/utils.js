// Your code here

const currentAgeForBirthYear = (year) => {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

export { currentAgeForBirthYear };