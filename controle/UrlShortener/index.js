//-- DEVELOPER DAVIDSONBPE © 2017 www.davidsonbpe.blogspot.com , Inc. --//
var mensagem="";
function clickIE() {if (document.all) {(mensagem);return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(mensagem);return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")
SMB_URL = "" + document.location;
SMB_From = SMB_URL.indexOf("?");
SMB_Page = SMB_URL.substring(SMB_From+1, SMB_URL.length);
document.write('<iframe name="janela-one" id="frame-spec" width="250" height="30" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://tinyurl.com/api-create.php?url=' + SMB_Page + '"></iframe>');
//document.write('<a id="urls" href="index.html?' + SMB_Page + '" target="_blank"><i class="home-spkd" aria-hidden="true"></i> botom</a>');
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-49856760-1', 'auto');
  ga('send', 'pageview');