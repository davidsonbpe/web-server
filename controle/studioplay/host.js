document.write('<div class="dxplay" style="background: #171515;margin: 0px;padding: 4px 0px 2px;"><meta charset="UTF-8"><meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" /><link rel="stylesheet" href="https://davidsonbpe.github.io/web-server/controle/studioplay/css/style.css"><div id="player" style="width:340px;height:30px;margin:0px auto;"><div id="player-controles" style="width:25px;height:30px;text-align:left;float:left;"><button class="fa audio-button"><audio id="audio" preload="auto" tabindex="0" type="audio/mpeg"><source src="http://stm37.painel.foxsolucoes.net:10396/;" type="audio/mp3"></audio></button></div><div id="player-vu-meter" style="width:147px;height:30px;text-align:left;float:left;"><div class="dropdown"><button onclick="myFunction()" class="dropbtn">DECOM STUDIO <i class="fa fa-ellipsis-v"></i></button><div id="myDropdown" class="dropdown-content"><ul class="ult" id="playlist"><li class="elik"><a href="http://stm37.painel.foxsolucoes.net:10396/;">DSTUDIO LIVE</a></li><li class="elik"><a href="https://devcast.herokuapp.com/">DSTUDIO POP</a></li><li class="elik"><a href="https://autodjbr.herokuapp.com/">DSTUDIO BR</a></li></ul></div></div></div><div id="player-vu-meter" style="width:100px;height:30px;text-align:left;float:left;"><img src="https://davidsonbpe.github.io/web-server/host-images/img-radioplay/img-player-vu-meter.gif" width="100" height="25" /></div><div id="player-links" style="height:30px;text-align:right;padding-top:5px;float:right;"><a href="https://davidsonbpe.blogspot.com/" target="_blank"><i class="fa fa-globe iconhbt"></i></a>&nbsp;<a href="https://decomrradio.blogspot.com/" target="_blank"><i class="fa fa-apple iconhbt"></i></a>&nbsp;<a href="https://decomrradio.blogspot.com/" target="_blank"><i class="fa fa-android iconhbt"></i></a></div></div><script src="https://davidsonbpe.github.io/web-server/controle/studioplay/js/jquery.min.js"></script><script src="https://davidsonbpe.github.io/web-server/controle/studioplay/js/index.js"></script></div>');function myFunction() {document.getElementById("myDropdown").classList.toggle("show");}window.onclick = function(event) {if (!event.target.matches('.dropbtn')) {var dropdowns = document.getElementsByClassName("dropdown-content");var i;for (i = 0; i < dropdowns.length; i++) {var openDropdown = dropdowns[i];if (openDropdown.classList.contains('show')) {openDropdown.classList.remove('show');}}}}
document.addEventListener('contextmenu', event => event.preventDefault()); /*---ti---*/