const white_keys = document.querySelectorAll(".white-key");
const black_keys = document.querySelectorAll(".black-key");

white_keys.forEach((white_key, idx) => {
	white_key.id = `white-key${idx}`;
	white_key.addEventListener("mousedown", function (event) {
		if (!event.target.closest(".black-key"))
			white_key.style.background =
				"linear-gradient(rgb(21, 158, 135), rgb(36, 238, 204))";
		playNote(white_key.id);
	});
	white_key.addEventListener("mouseup", function () {
		white_key.style.background = "white";
		stopNote(white_key.id);
	});
	white_key.addEventListener("touchstart", function (event) {
		event.preventDefault();
		if (!event.target.closest(".black-key"))
			white_key.style.background =
				"linear-gradient(rgb(21, 158, 135), rgb(36, 238, 204))";
		playNote(white_key.id);
	});
	white_key.addEventListener("touchend", function (event) {
		event.preventDefault();
		white_key.style.background = "white";
		stopNote(white_key.id);
	});
});

black_keys.forEach((black_key, idx) => {
	black_key.id = `black-key${idx}`;
	black_key.addEventListener("mousedown", function () {
		black_key.style.background =
			"linear-gradient(rgb(21, 158, 135), rgb(36, 238, 204))";
		playNote(black_key.id);
	});
	black_key.addEventListener("mouseup", function () {
		black_key.style.background = "black";
		stopNote(black_key.id);
	});
	black_key.addEventListener("touchstart", function (event) {
		event.preventDefault();
		black_key.style.background =
			"linear-gradient(rgb(21, 158, 135), rgb(36, 238, 204))";
		playNote(black_key.id);
	});
	black_key.addEventListener("touchend", function (event) {
		event.preventDefault();
		black_key.style.background = "black";
		stopNote(black_key.id);
	});
});

function playNote(key_id) {
	const audio_id = `audio-${key_id}`;
	const audio = document.getElementById(audio_id);
	audio.play();
}

function stopNote(key_id) {
	const audio_id = `audio-${key_id}`;
	const audio = document.getElementById(audio_id);
	audio.pause();
	audio.currentTime = 0;
}
