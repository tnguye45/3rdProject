$('html').addClass('js').removeClass('no-js') /*make js not depend on javascript*/
$('a[href^="http"]').on('click'), function(e) {
  console.log("OMG somebody clicked this link!");
  window.open($(this).attr('href'), "_blank") /* refer as jquery object to file a new window event & open window in new tab, provide window default*/
  e.preventDefault();
}); /* start with http, call out attribute names*/ /*create event on user's touch: click event & file event*/
