function checkName(name) {
    name = name.toLowerCase();

    const forbiddenEndings = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastLetter = name[name.length - 1];

    if (forbiddenEndings.includes(lastLetter)) {
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
}

console.log(checkName("RAFEE"));

