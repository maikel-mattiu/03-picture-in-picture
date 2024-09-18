//HTML Elements
const videoElement = document.getElementById("video")
const startButton = document.getElementById("button")
const pipButton = document.getElementById("pip-button")
const stopButton = document.getElementById("stop-button")

//Prompt to select media stream and pass it to the video element and play it
async function selectMediaStream(params) {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia()
		videoElement.srcObject = mediaStream
		videoElement.onloadedmetadata = () => {
			videoElement.play()
		}
	} catch (error) {
		console.log("Something went wrong:", error)
	}
}

//Event Listener
pipButton.addEventListener("click", async () => {
	//Diasble button
	button.disabled = true
	//Start picture in picture
	await videoElement.requestPictureInPicture()
	//Reset button
	button.disabled = false
})

//Start Capture
startButton.onclick = () => {
	selectMediaStream()
}

//Stop Capture
stopButton.onclick = () => {
	const stream = videoElement.srcObject
	const tracks = stream.getTracks()
	tracks.forEach((track) => track.stop())
	videoElement.srcObject = null
}
