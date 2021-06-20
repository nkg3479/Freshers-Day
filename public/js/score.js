const score = {
    ME: 0,
    CE: 0,
    CS: 0,
    EC: 0,
    EE: 0,
}

const votes = {
    CS: 0,
    ME: 0,
    CE: 0,
    EE: 0,
    EC: 0,
}
    

let table = document.querySelector('#points');

Array.from(table.children).forEach((e) => {
  let key = e.children[1].innerText;
  e.children[2].innerText= score[key]; 
} )

Object.keys(votes).forEach((key) => {
        document.querySelector(`#${key}-vote`).innerText = votes[key];
    })
