

/*Web Open Questions Options*/
var questionsSvg = document.querySelectorAll('.open-info-svg')

const questions = questionsSvg[0]
const questions1 = questionsSvg[1]

/*Web Close Questions Options*/
const closeQ = document.querySelector('.close-extra-info')

/*Extra Questions*/
const questionsSection = document.querySelector('div.extra-questions-closed')



/*Expand Extra Questions*/
questions.addEventListener('click', () =>{
    questionsSection.setAttribute('id', 'extra-questions-opened')
    
})

questions1.addEventListener('click', () =>{
    questionsSection.setAttribute('id', 'extra-questions-opened')
})
/*Close Extra Questions*/

closeQ.addEventListener('click', () =>{
    questionsSection.removeAttribute('id')
})



