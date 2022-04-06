
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach((n) => {
    n.addEventListener('click', () => {
        n.classList.toggle('active'); // add or remove the active class
        // we need to calculate the height of the answer
        const height = n.nextElementSibling.scrollHeight;

        if(n.classList.contains('active')) // if the classe active exist, we change the max height
        
        n.nextElementSibling.style.maxHeight=`${height}px`;
        else
        n.nextElementSibling.style.maxHeight='0px';
    });
});