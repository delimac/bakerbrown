// 1. when clicking the hamburger, run a function
// 2. inside the function, add/remove the class of open
// 3. make sure our link doesn't jump the page to the top

$('.menu-toggle').on('click', function() {
  $('.menu').toggleClass('open')  
  return false  
})