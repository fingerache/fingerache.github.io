let cardDict = {
  "card-section-1": document.getElementById("card-1"),
  "card-section-2": document.getElementById("card-2"),
  "card-section-3": document.getElementById("card-3"),
};

const observer = new IntersectionObserver(entries => {
    entries.forEach( e => {
      if(e.isIntersecting){
        cardDict[e.target.id].classList.remove('hide')
        cardDict[e.target.id].classList.add('show')
      } else {
        cardDict[e.target.id].classList.remove('show')
        cardDict[e.target.id].classList.add('hide')
      }
    })
});

const card1 = document.getElementById('card-section-1');
const card2 = document.getElementById('card-section-2');
const card3 = document.getElementById('card-section-3');

observer.observe(card1);
observer.observe(card2);
observer.observe(card3);
