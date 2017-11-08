$('html').addClass('js').removeClass('no-js') /*make js not depend on javascript*/
$('a[href^="http"]').on('click'), function(e) {
  console.log("OMG somebody clicked this link!");
  window.open($(this).attr('href'), "_blank") /* refer as jquery object to file a new window event & open window in new tab, provide window default*/
  e.preventDefault();
}); /* start with http, call out attribute names*/ /*create event on user's touch: click event & file event*/

$('abbr[title]').one('click',function(){
  var expanssion = $(this).attr('title');
  var abbr = $(this).text(;
  $(this).text(exapnsion + " (" +abbr+ ") ");
  $(this).addClass('is-exapnded');
});  /*to file up abbr when click in the website and also in html adjust the color, text decoration in abbr; with one-show the abbr only 1; but with on, it will go forever*/

$($('li')[2]).on('click', function(){
  $(this).addClass('is-faded-out');
}); /* to hide certain elemnet on the website when click on it, if want to delete, USE remove; can adjust transtion in html */
