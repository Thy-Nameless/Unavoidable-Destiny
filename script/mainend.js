
// Code for showing and hiding menu
$(function() {
    $( ".deskapp" ).draggable({containment: "parent"});
  });
  $("#osoutline").on('mouseenter',function(){
    var topMess = Math.min((window.innerWidth * 0.365625), (window.innerHeight * 0.65));
    $("#osmenu").animate({top: topMess},500, function(){
        $("#osmenu").css('top','min(36.5625vw, 65vh)');
    });
});
$("#osoutline").on('mouseleave',function(){
    setTimeout(
        function() 
        {
            if($('#osmenu:hover').length == 0) {
                var topMess = Math.min((window.innerWidth * 0.534375), (window.innerHeight * 0.95));
                $("#osmenu").animate({top: topMess},500, function(){
                    $("#osmenu").css('top','min(53.4375vw, 95vh)');
                });
            } else {
            }
        }, 10);
});
$("#osmenu").on('mouseleave',function(){
    setTimeout(
        function() 
        {
            if($('#osoutline:hover').length == 0) {
                var topMess = Math.min((window.innerWidth * 0.534375), (window.innerHeight * 0.95));
                $("#osmenu").animate({top: topMess},500, function(){
                    $("#osmenu").css('top','min(53.4375vw, 95vh)');
                });
            } else {
            }
        }, 10);
});

/*const audioContext = new AudioContext();

const buffer = audioContext.createBuffer(
    1,
    audioContext.sampleRate * 1,
    audioContext.sampleRate
);

const channelData = buffer.getChannelData(0);

for (let i=0;i<buffer.length;i++){
    channelData[i] = Math.random() * 2 - 1;
}

const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.05,0);

const clickurl = '../sound/Click.mp3';

$('body').on('mousedown', async () =>{
    const whiteNoiseSource = audioContext.createBufferSource();
    whiteNoiseSource.buffer = buffer;
    whiteNoiseSource.connect(primaryGainControl);
    primaryGainControl.connect(audioContext.destination);
    whiteNoiseSource.start();
    
    const response = await fetch('../sound/Click.mp3');
    
    const soundBuffer = await response.arrayBuffer();
    console.log(soundBuffer);
    const clickBuffer = await audioContext.decodeAudioData(soundBuffer);
    const clickSource = audioContext.createBufferSource();
    clickSource.buffer = clickBuffer;
    clickSource.connect(primaryGainControl);
    clickSource.start();
})*/

const audioContext = new AudioContext();
let audio;
fetch('../sound/Click.mp3')
    .then(data=>data.arrayBuffer())
    .then(arrayBuffer=>audioContext.decodeAudioData(arrayBuffer))
    .then(decodedAudio=>{
        audio = decodedAudio;
    })

const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.01,0);

$('body').on('mousedown', function(event){
        var e = event.originalEvent.button;
        if(e==0){
            const playSound = audioContext.createBufferSource();
            playSound.buffer=audio;
            playSound.connect(primaryGainControl);
            primaryGainControl.connect(audioContext.destination);
            playSound.connect(audioContext.destination);
            playSound.start(audioContext.currentTime);
        }
        
})

$('#birdle').on('dblclick',function(){
    
});