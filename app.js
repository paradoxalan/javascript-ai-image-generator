const submitIcon = document.querySelector("#submit-icon")
const inputElem = document.querySelector("input")
const apiEndpoint = 'https://api.openai.com/v1/images/generations'

const getImages = async () => {
	const options = {
		method: "POST",
		headers: {
			"Authorization":`Bearer ${API_KEY}`,
			"Content-type":"application/json"
		},
		body: JSON.stringify({
			"prompt":inputElem.value,
			"n":4,
			"size":"1024x1024",
			"model":"dall-e-3"
		})
	}

	try {
		const response = await fetch(apiEndpoint, options)
		const data = await response.json()
		console.log(data)
	}catch(e){
		console.error(e)
	}
}

inputElem.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    	getImages()
    }
});

submitIcon.addEventListener('click', getImages);

console.log('here!')