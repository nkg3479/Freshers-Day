const score = {
    CS: 0,
    ME: 0,
    CE: 0,
    EE: 0,
    EC: 0
}

const votes = {

    ME: 3,
    CE: 4,
    CS: 1,
    EC: 1,
    EE: 1
}

//sorting score
let sortedScore= [];
for (let key in score) {
    sortedScore.push([key,score[key]]);
}

sortedScore.sort((a,b) => {
    return a[1] - b[1];
});

//updating votes
Object.keys(votes).forEach((key) => {
        document.querySelector(`#${key}-vote`).innerText = votes[key];
    })

//updating scores
let table = document.querySelector('#points');
sortedScore.reverse().forEach((kv,index) => {
    table.children[index].children[1].innerText=kv[0];
    table.children[index].children[2].innerText=kv[1];
})
