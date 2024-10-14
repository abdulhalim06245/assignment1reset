function password(obj) {
    const { name, birthYear, siteName } = obj;
    
    const username = name;
    const firstLetterSiteName = siteName;
    const birthYearLastDigit = birthYear; 

    const generatedPassword = `${firstLetterSiteName}#${username}@${birthYearLastDigit}`;
    
    return generatedPassword;
}


const userObject = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "google"
};

const generatedPassword = password(userObject);
console.log(generatedPassword); 