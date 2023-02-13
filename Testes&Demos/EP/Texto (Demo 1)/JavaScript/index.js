const $html = document.querySelector('html')
const switchTheme = document.getElementById('darkLight')
const switchDark = document.querySelector('.toDark')
const switchLight = document.querySelector('.toLight')

switchDark.addEventListener('click', () =>{
  $html.classList.add('dark-mode')
  switchDark.removeAttribute('id')
  switchLight.setAttribute('id','toggle')
})

switchLight.addEventListener('click', () =>{
  $html.classList.remove('dark-mode')
  switchLight.removeAttribute('id')
  switchDark.setAttribute('id','toggle')
})


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


/*Questions*/
var doubt1 = document.querySelector('.q1')
var doubt2 = document.querySelector('.q2')
var doubt3 = document.querySelector('.q3')
var doubt4 = document.querySelector('.q4')
var doubt5 = document.querySelector('.q5')

/*Questions descriptions*/
var doubtDesc1= document.querySelector('.question-1-desc')
var doubtDesc2 = document.querySelector('.question-2-desc')
var doubtDesc3 = document.querySelector('.question-3-desc')
var doubtDesc4 = document.querySelector('.question-4-desc')
var doubtDesc5 = document.querySelector('.question-5-desc')


/*Change questions and questions descriptions*/
doubt1.addEventListener("mouseover", function() {
    this.style.color = "var(--dark-light-color)";
    this.style.textDecoration = "underline";
    doubtDesc1.setAttribute('id','doubt-desc-active')

    doubt2.style.color = "var(--blackWhite-Scale-60";
    doubt2.style.textDecoration = "none";  
    doubtDesc2.removeAttribute('id')   

    doubt3.style.color = "var(--blackWhite-Scale-60";
    doubt3.style.textDecoration = "none";  
    doubtDesc3.removeAttribute('id')

    doubt4.style.color = "var(--blackWhite-Scale-60";
    doubt4.style.textDecoration = "none";  
    doubtDesc4.removeAttribute('id')

    doubt5.style.color = "var(--blackWhite-Scale-60";
    doubt5.style.textDecoration = "none";  
    doubtDesc5.removeAttribute('id')
}) 

doubt2.addEventListener("mouseover", function() {
    this.style.color = "var(--dark-light-color)";
    this.style.textDecoration = "underline";
    doubtDesc2.setAttribute('id','doubt-desc-active')
    
    doubt1.style.color = "var(--blackWhite-Scale-60";
    doubt1.style.textDecoration = "none";  
    doubtDesc1.removeAttribute('id')  

    doubt3.style.color = "var(--blackWhite-Scale-60";
    doubt3.style.textDecoration = "none";  
    doubtDesc3.removeAttribute('id')

    doubt4.style.color = "var(--blackWhite-Scale-60";
    doubt4.style.textDecoration = "none";  
    doubtDesc4.removeAttribute('id')

    doubt5.style.color = "var(--blackWhite-Scale-60";
    doubt5.style.textDecoration = "none";  
    doubtDesc5.removeAttribute('id')
})


doubt3.addEventListener("mouseover", function() {
    this.style.color = "var(--dark-light-color)";
    this.style.textDecoration = "underline";
    doubtDesc3.setAttribute('id','doubt-desc-active')

    doubt1.style.color = "var(--blackWhite-Scale-60";
    doubt1.style.textDecoration = "none";  
    doubtDesc1.removeAttribute('id')
    
    doubt2.style.color = "var(--blackWhite-Scale-60";
    doubt2.style.textDecoration = "none";  
    doubtDesc2.removeAttribute('id')

    doubt4.style.color = "var(--blackWhite-Scale-60";
    doubt4.style.textDecoration = "none";  
    doubtDesc4.removeAttribute('id')

    doubt5.style.color = "var(--blackWhite-Scale-60";
    doubt5.style.textDecoration = "none";  
    doubtDesc5.removeAttribute('id')
})


doubt4.addEventListener("mouseover", function() {
    this.style.color = "var(--dark-light-color)";
    this.style.textDecoration = "underline";
    doubtDesc4.setAttribute('id','doubt-desc-active')

    doubt1.style.color = "var(--blackWhite-Scale-60";
    doubt1.style.textDecoration = "none"; 
    doubtDesc1.removeAttribute('id')
    
    doubt2.style.color = "var(--blackWhite-Scale-60";
    doubt2.style.textDecoration = "none";  
    doubtDesc2.removeAttribute('id')  

    doubt3.style.color = "var(--blackWhite-Scale-60";
    doubt3.style.textDecoration = "none";  
    doubtDesc3.removeAttribute('id')

    doubt5.style.color = "var(--blackWhite-Scale-60";
    doubt5.style.textDecoration = "none";  
    doubtDesc5.removeAttribute('id')
})      

doubt5.addEventListener("mouseover", function() {
    this.style.color = "var(--dark-light-color)";
    this.style.textDecoration = "underline";
    doubtDesc5.setAttribute('id','doubt-desc-active')

    doubt1.style.color = "var(--blackWhite-Scale-60";
    doubt1.style.textDecoration = "none";  
    doubtDesc1.removeAttribute('id')
    
    doubt2.style.color = "var(--blackWhite-Scale-60";
    doubt2.style.textDecoration = "none";  
    doubtDesc2.removeAttribute('id')   

    doubt3.style.color = "var(--blackWhite-Scale-60";
    doubt3.style.textDecoration = "none";  
    doubtDesc3.removeAttribute('id')

    doubt4.style.color = "var(--blackWhite-Scale-60";
    doubt4.style.textDecoration = "none";  
    doubtDesc4.removeAttribute('id')
})


/*Scroll-awareness*/
function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }

const sections = [
    selectElementByClass('topoWrapper'),
    selectElementByClass('section-1'),
    selectElementByClass('section-2'),
    selectElementByClass('section-3'),
    selectElementByClass('section-4'),
    selectElementByClass('section-5'),
];

const navSections = {
    topo: selectElementByClass('topoTitulo'),
    Sec1: selectElementByClass('sectionNav-1'),
    Sec2: selectElementByClass('sectionNav-2'),
    Sec3: selectElementByClass('sectionNav-3'),
    Sec4: selectElementByClass('sectionNav-4'),
    Sec5: selectElementByClass('sectionNav-5'), 
}

const observerOptions = {
    root: null,
    rootMargin: '100px',
    threshold: 0.7,
  };

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const navSection = navSections[entry.target.id];
        // add 'active' class on the navItem
        navSection.classList.add('active');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navSections).forEach((item) => {
          if (item != navSection) {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((sec) => observer.observe(sec));


console.log(IntersectionObserverEntry)



const hideAside = document.querySelector('.hide-aside-wrapper')
const aside = document.querySelector('aside')

const openAside = document.querySelector('.open-aside')
const openAsideWrapper = document.querySelector('.open-aside-wrapper')

hideAside.addEventListener('click', () => {
  aside.classList.add('hiddenAside')
  aside.style.width = "70px";
  openAsideWrapper.style.display = "block";
})

openAside.addEventListener('click', () => {
  openAsideWrapper.style.display = "none";
  aside.classList.remove('hiddenAside')
})



console.log(openAside)







