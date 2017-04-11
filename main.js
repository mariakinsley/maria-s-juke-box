var backward = document.getElementById("backward")
var forward = document.getElementById("forward")
var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var audio = document.getElementById("audio")
var i = 0
var searchbtn = document.querySelector("#search")
var search = document.querySelector("#name")



function jukebox() {
    this.songArray = []
}
jukebox.prototype.addSong = function(music1) {
    this.songArray.push(music1)
}

var jb = new jukebox()
jb.addSong("song01.mp3")
jb.addSong("song2.mp3")
jb.addSong("song3.mp3")



// tracks = ["strings of songs"];

// soundCloud = new MusicPlayer(tracks);


// function MusicPlayer( songIds ) {
// var that = this;
// this.players = []; //[players1,players2,players3,players4];
// this.currentTrack = 0;
// this.play = function(){
// 		console.log("this:", this, "that:", that);
//  		console.log(this.tracks)
//  		if (that.players[that.currentTrack].pause());{
// 			that.players[that.currentTrack].play();
// 		}
//     this.loadPlayers = function( array ) {
//     		console.log( "loadingPlayers mon!", array, array.length );
//     		if( array.length > 0 ) {
//
//     			SC.stream("/tracks/" + array[0] ).then(function(player){
//     				that.players.push(player);
//     				that.loadPlayers( array.slice(1) );
//     			});
//     		} else {
//     			that.players[that.currentTrack].play();
//     		}
//     	}
//
// 	this.pause = function(){
// 		if (!this.players[this.currentTrack].play());{
// 			this.players[this.currentTrack].pause();
// 		}
// 		console.log(this.pause)
//
// 	}
// //   this.loadPlayers(songIds);
// //   document.getElementById("Play").addEventListener("click",
// // 			soundCloud.play);
// //
// // 	document.getElementById("Pause").addEventListener("click",
// // 			function(){soundCloud.pause();});
// //
// //
// // 	document.getElementById("Next").addEventListener("click",
// // 	 		function(){soundCloud.next();});
// //
// //
// // 	document.getElementById("Back").addEventListener("click",
// //  			function(){soundCloud.back();});
// //
// // });
//
// ==========================================================
jukebox.prototype.play = function() {
    audio.play();
}

audio.src = jb.songArray[i];

jukebox.prototype.pause = function() {
    audio.pause();

}
jukebox.prototype.forward = function() {
    i++
    if (i < jb.songArray.length) {
        audio.pause()
        audio.src = jb.songArray[i]
        audio.play()
    } else {
        i = 0;
        audio.pause()
        audio.src = jb.songArray[i]
        audio.play()
    }
}
jukebox.prototype.back = function() {
    i--
    if (i >= 0) {
        audio.pause()
        audio.src = jb.songArray[i]
        audio.play()

    } else {
        i = jb.songArray.length - 1;
        audio.pause()
        audio.src = jb.songArray[i]
        audio.play()

    }
}

play.addEventListener("click", function(event) {
    event.preventDefault();
    jb.play();
})

pause.addEventListener("click", function(event) {
    event.preventDefault();
    jb.pause();
})

forward.addEventListener("click", function(event) {
    event.preventDefault();
    jb.forward();
})

backward.addEventListener("click", function(event) {
    event.preventDefault();
    jb.back();
})
// jb.back();









//
// // ==================================================================================
// // // targets the play button from the page and
// // //  stores a reference to it in the playButton variable
// // // this play button has global scope
// // var playButton = document.querySelector("#play")
// // var songs ["song1", "song2","song3", "song4"
// // ]
// // var current song[0]
// // var Button1 = document.querySelector("button1")
// // // defines the Jukebox object
// // function Jukebox() {
// //   // the code for what happens when you create a Jukebox object
// //   //  goes here
// // }
// //
// // // defines the Jukebox prototype object
// // Jukebox.prototype.play = function () {
// //   return.
// //   // the code for playing a song would go here
// // }
// //
// // // the rest of your prototype methods would go here
// //
// // // creates a new Jukebox object
// // // this variable has global scope after this point
// // var jukebox = new Jukebox()
// //
// // // adds an event listener for when you click the play button
// // playButton.addEventListener("click", function(event){
// //   // prevents link from going to the next page
// //   event.preventDefault()
// //
// //   // the rest of the code
// //   //  for what happens when you click the play button goes here
// //
// //   // uses the jukebox object to play the music file
// //   jukebox.play()
// // })
// //
// // // the rest of your event listeners would go here
