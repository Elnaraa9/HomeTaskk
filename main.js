const total={};
function counter(string) {
    for (let i = 0; i < string.length; i++) {
        let counter=0;
        for (let j = 1; j < string.length; j++) {
            if (string[i]==string[j]) {
                counter++;
                total={`${string[i]}:${counter}`};
            }
        }
    }
    console.log(total);
}
counter("Elnara");