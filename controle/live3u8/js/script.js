// code developer davidsonbpe no atualizado copias
m3u8sub_URL = "" + document.location; m3u8sub_From = m3u8sub_URL.indexOf("?="); m3u8sub_Page = m3u8sub_URL.substring(m3u8sub_From + 2, m3u8sub_URL.length);
document.addEventListener("DOMContentLoaded", () => { const source = "https://"+ m3u8sub_Page +".m3u8";
  //const source = "https://cdn.cdnseguro.com/Demo/Demo/playlist.m3u8"; ?=cdn.cdnseguro.com/Demo/Demo/playlist
  const video = document.querySelector("video");
  const player = new Plyr(video, {
    captions: { active: true, update: true, language: "en" } });
  if (!Hls.isSupported()) {
    video.src = source;
  } else {
    // For more Hls.js options, see https://github.com/dailymotion/hls.js
    const hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
    window.hls = hls;
    player.on("languagechange", () => {
      // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
      setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
    });
  }

  window.player = player;
});