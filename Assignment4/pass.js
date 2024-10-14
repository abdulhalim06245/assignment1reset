function password(info) {
    const { name, birthYear, siteName } = info;

    const passwordPart1 = name;
    const passwordPart2 = birthYear; 
    const passwordPart3 = siteName; 

    const generatedPassword = `${passwordPart3}${passwordPart1}${passwordPart2}`;

    return generatedPassword;
}
const userInfo = {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "google"
};

const newPassword = password(userInfo);
console.log("Generated Password:", newPassword); 
