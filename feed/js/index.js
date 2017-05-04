$(function() {
  $(".dark").click(function() {
    $("#feed").addClass('dark');
  });
  $(".light").click(function() {
    $("#feed").removeClass('dark');
  });
  var url = 'https://feeds.feedburner.com/Davidsonbpe';
  
  $.ajax({
    type: "GET",
    url: document.location.protocol + '//api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url),
    dataType: 'json',
    error: function() {
      $("#feed").after("<center>Não é possível carregar o feed, caminho incorreto ou feed inválido</center>");
    },
    success: function(xml) {
      values = xml.items;

      for (var i = 0, j = values.length; i < j; i++) {
        // console.log(values[i]);

        $("#feed").append("<li><a href='" + values[i].link + "' target='_blank'>" + values[i].title + "</a><br><i>" + values[i].author + "</i><a href='" + values[i].link + "' class='apply'  target='_blank'>MAIS</a><div>" + values[i].content + "</div></li>");
      }
    }
  });
});