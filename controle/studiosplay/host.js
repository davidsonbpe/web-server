document.write('<link rel="stylesheet" href="https://davidsonbpe.github.io/web-server/controle/studiosplay/css/style.css"><meta charset="UTF-8"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900" /><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" /><nav class="container-5412019"><a href="#play" id="myBtn-5412019" tooltip="Social" class="buttons-5412019"><span class="spanred-5412019"><span class="rotate-5412019 spanred-5412019"></span></span></a></nav><div id="myModal-5412019" class="modal-5412019"> <div class="headere-5412019"><img class="icloog-5412019" src="https://davidsonbpe.github.io/web-server/controle/studiosplay/img/radio.svg" height="25" /><span class="titulo-5412019">DECOM STUDIO</span><span class="close-5412019">&times;</span></div> <div class="modal-content-5412019"><div id="listolp" class="taber-5412019"><!--1--> <div class="mhn-player"><div class="album-art"></div><div class="play-list"><a href="#" class="play" data-id="1" data-album="Programação AutoDJ" data-artist="A Rádio que Sintoniza você..." data-title="Decom Studio Live" data-albumart="https://davidsonbpe.github.io/web-server/controle/studiosplay/img/dcpop.jpg" data-url="https://cloud1.cdnseguro.com:2136/stream"></a><a href="#" class="play" data-id="2" data-album="Programação AutoDJ" data-artist="Sintonizando hits da Mydkss..." data-title="Decom Studio Mydkss" data-albumart="https://davidsonbpe.github.io/web-server/controle/studiosplay/img/dcMydkss.jpg" data-url="https://038.000webhostapp.com/mydks/"></a><a href="#" class="play" data-id="3" data-album="Programação AutoDJ" data-artist="Estilo live Popular BR!" data-title="Decom Studio BR" data-albumart="https://davidsonbpe.github.io/web-server/controle/studiosplay/img/dcbr.jpg" data-url="https://autodjbr.herokuapp.com/"></a><a href="#" class="play" data-id="4" data-album="Programação AutoDJ" data-artist="Music Studio ListPop..." data-title="Decom Studio ListPop" data-albumart="https://davidsonbpe.github.io/web-server/controle/studiosplay/img/hits.jpg" data-url="https://071.000webhostapp.com/davcast/"></a><a href="#" class="play" data-id="5" data-album="Programação AutoDJ" data-artist="Hits do Anos 90..." data-title="Decom Studio 90" data-albumart="https://davidsonbpe.github.io/web-server/controle/studiosplay/img/st90.jpg" data-url="https://071.000webhostapp.com/90/"></a></div><div class="audio"></div><div class="current-info"><div class="song-artist"></div><div class="song-album"></div><div class="song-title"></div></div><div class="controls"><a href="#" class="toggle-play-list"><i class="fa fa-list-ul"></i></a><div class="duration clearfix"><span class="pull-left play-position"></span><span class="pull-right"><span class="play-current-time">00:00</span></span></div><div class="progress" style="height: 1px;margin: 15px 0;position: relative;background: #262626;"><div class="bar"></div></div><div class="action-button" style="text-align: center;"><a href="#" class="prev atxlist" style="width: 40px;height: 40px;font-size: 16px;margin-right: 5px;border: 2px solid;line-height: 35px;border-radius: 50%;text-align: center;display: inline-block;"><i class="fa fa-step-backward"></i></a><a href="#" class="play-pause atxlist" style="width: 40px;height: 40px;font-size: 16px;margin-right: 5px;border: 2px solid;line-height: 35px;border-radius: 50%;text-align: center;display: inline-block;"><i class="fa fa-pp"></i></a><a href="#" class="stop atxlist" style="width: 40px;height: 40px;font-size: 16px;margin-right: 5px;border: 2px solid;line-height: 35px;border-radius: 50%;text-align: center;display: inline-block;"><i class="fa fa-stop"></i></a><a href="#" class="next atxlist" style="width: 40px;height: 40px;font-size: 16px;margin-right: 5px;border: 2px solid;line-height: 35px;border-radius: 50%;text-align: center;display: inline-block;"><i class="fa fa-step-forward"></i></a></div></div></div></div></div></div><script src="https://davidsonbpe.github.io/web-server/controle/studiosplay/js/jquery.min.js"></script><script src="https://davidsonbpe.github.io/web-server/controle/studiosplay/js/index.js"></script>');

var modal = document.getElementById('myModal-5412019');
    var btn = document.getElementById("myBtn-5412019");
    var span = document.getElementsByClassName("close-5412019")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
document.addEventListener('contextmenu', event => event.preventDefault()); /*---ti---*/
