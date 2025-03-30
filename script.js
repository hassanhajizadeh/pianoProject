const white_keys = document.querySelectorAll('.white-key');
const black_keys = document.querySelectorAll('.black-key');
const soundDuration = .2 ; //in seconds

const whiteKeyFrequencies = [
    27.50000,30.86771,32.70320,36.70810,41.20344,
    43.65353,48.99943,55.00000,61.73541,65.40639,
    73.41619,82.40689,87.30706,97.99886,110.0000,
    123.4708,130.8128,146.8324,164.8138,174.6141,
    195.9977,220.0000,246.9417,261.6256,293.6648,
    329.6276,349.2282,391.9954,440.0000,493.8833,
    523.2511,587.3295,659.2551,698.4565,783.9909,
    880.0000,987.7666,1046.502,1174.659,1318.510,
    1396.913,1567.982,1760.000,1975.533,2093.005,
    2349.318,2637.020,2793.826,3135.963,3520.000,
    3951.066,4186.009
];

const blackKeyFrequencies = [
    29.13524,34.64783,38.89087,46.24930,51.91309,
    58.27047,69.29566,77.78175,92.49861,103.8262,
    116.5409,138.5913,155.5635,184.9972,207.6523,
    233.0819,277.1826,311.1270,369.9944,415.3047,
    466.1638,554.3653,622.2540,739.9888,830.6094,
    932.3275,1108.731,1244.508,1479.978,1661.219,
    1864.655,2217.461,2489.016,2959.955,3322.438,
    3729.310
];


white_keys.forEach((white_key,idx) => {
    white_key.id = `white-key${idx}`;
    white_key.addEventListener('mousedown', function (event) {
        if(!event.target.closest(".black-key"))
            white_key.style.background= "linear-gradient(rgb(21, 158, 135),rgb(36, 238, 204))";
            playNote(white_key.id);
    });
    white_key.addEventListener('mouseup', function () {
        white_key.style.background = "white";
		stopNote(white_key.id);
    });
});

black_keys.forEach((black_key , idx) => {
    black_key.id = `black-key${idx}`;
    black_key.addEventListener('mousedown',function(){
        black_key.style.background =  "linear-gradient(rgb(21, 158, 135),rgb(36, 238, 204))";
        playNote(black_key.id);
    });
    black_key.addEventListener('mouseup',function(){
        black_key.style.background = "black";
		stopNote(black_key.id)
    });
});


function playNote(key_id){
	const audio_id = `audio-${key_id}`;
	const audio = document.getElementById(audio_id);
	audio.play();
}

function stopNote(key_id){
	const audio_id = `audio-${key_id}`;
	const audio = document.getElementById(audio_id);
	audio.pause();
	audio.currentTime = 0;
}