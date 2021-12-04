// Update the date div with user's current date
const dateDiv = document.querySelector('#date');
let date = new Date();

const formatDate = () => {

  // Date methods return a value that corresponds to the index of each month/weekday
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
  return week[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

dateDiv.innerHTML = formatDate(date);

// Expanding section with GSAP

let expand = document.querySelectorAll('.expand');
		
// iterate through the .expand divs on each card
expand.forEach(element => {
  // .description wrapper div
  let content = element.nextElementSibling;

  // content to collpse
  let innerContent = content.children;

  let tl = new TimelineMax({
    reversed: true,
    paused: true
  });

  tl.from(content, .5, { className: "+=zero-height" }, 'open');

  tl.staggerFrom(innerContent, .5, { autoAlpha: 0, y: '-30%', ease: Back.easeOut }, .1, 'open');

  element.addEventListener('click', () => {
    tl.reversed() ? (tl.play(), element.innerHTML = 'click to see details ▲')
                  : (tl.reverse(), element.innerHTML = 'click to see details ▼');	 
  });

})
