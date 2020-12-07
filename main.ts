let badWordsArr: string[] = [];

const GET_ID: Function = (id): any => document.getElementById(id);

GET_ID('badWordAdd').addEventListener('click', () => {

    if (/^([A-Za-z]){1,}$/.test(GET_ID('badWordsInput').value)) {
        badWordsArr.push((GET_ID('badWordsInput').value));
        GET_ID('badWordsInput').value = '';
        console.log(badWordsArr);
        GET_ID('badWordsInput').style.border = ''
        GET_ID('badWordsList').textContent = `Bad words:${badWordsArr.join(' ')}`
    }
    else {
        GET_ID('badWordsInput').style.border = '2px solid red'
    }


})
GET_ID('badWordReset').addEventListener('click', () => {
    badWordsArr = []

    GET_ID('badWordsList').textContent = 'Bad words:'
    GET_ID('badWordsInput').style.border = ''

})



GET_ID('CenzorBtn').addEventListener('click', () => {

    let cenzorText: string = (GET_ID('cenzorText').value);

    let cenzorTextArr: String[] = (cenzorText.split(/[\s,.]/));

    console.log(cenzorTextArr);

    cenzorTextArr.forEach((textValue, textIndex) => {

        badWordsArr.forEach((value, index) => {
            if (cenzorTextArr[textIndex].toLowerCase() === value.toLowerCase()) {
                cenzorTextArr[textIndex] = '*'.repeat(cenzorTextArr[textIndex].length)

            }
        })


    })
    console.log(cenzorTextArr);
    GET_ID('cenzorText').value = cenzorTextArr.join(' ')
})


