

// Show explanation oprtion for the first time
const options = document.querySelectorAll('.question_container .question_options .option');
const explanation = document.querySelector('.question_container .explanation');

options.forEach(option => {
    option.addEventListener('click', () => {
        explanation.style.display = 'flex'; // Show explanation
    });
});

// display explanation text

const explanationImage = document.querySelector('.explanation .explanation_image');
const explanationText = document.querySelector('.explanation .explanation_text');



        explanationImage.addEventListener('click', () => {
            if (explanationText.style.display === 'none' || explanationText.style.display === '') {
                explanationText.style.display = 'block';
            } else {
                explanationText.style.display = 'none';
            }
        });
   


// the chapter oppeners










const unitOneContainer = document.querySelector('.unit1');
const unitTwoContainer = document.querySelector('.unit2');
const unitThreeContainer = document.querySelector('.unit3');

const chapterHolder = document.querySelector('.chapter_holder');
const chapterIconHolderDiv = document.querySelector('.chapter_holder .menu_icon');
const chapterHolderIcon = document.querySelector('.chapter_holder .menu_icon img');
const chapter = document.querySelector('.chapter');
const chapter1 = document.querySelector('.chapter .chapter_1');
const chapter2 = document.querySelector('.chapter .chapter_2');


chapterIconHolderDiv.addEventListener('click', () => {

    chapter.style.display = 'flex';

    if (chapterHolderIcon.style.rotate === '0deg') {
        chapterHolderIcon.style.rotate = '180deg';
        chapter.style.display = 'flex';
    } else{
        chapterHolderIcon.style.rotate = '0deg';
        chapter.style.display = 'none';
    }
    
});

chapter1.addEventListener('click', () => {

    chapter2.classList.remove('chapter_active_color');
    chapter1.classList.add('chapter_active_color');
   unitOneContainer.style.display = 'flex';
   unitTwoContainer.style.display = 'none';
   unitThreeContainer.style.display = 'none'; 
})

chapter2.addEventListener('click', () => {
   
    chapter1.classList.remove('chapter_active_color');
    chapter2.classList.add('chapter_active_color');
    unitOneContainer.style.display = 'none';
    unitTwoContainer.style.display = 'flex';
    unitThreeContainer.style.display = 'none';

   
   
})





















    
// make the footer to hide


let lastScrollTop = 0;
    
        const footer = document.getElementById('footer');

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop < lastScrollTop) {
                // Scrolling up
                footer.classList.remove('hidden');
                chapterHolder.style.bottom = '120px';
                
            } else {
                // Scrolling down
                footer.classList.add('hidden');
                chapterHolder.style.bottom = '10px';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });


        