let viewElements = [
	{
		"id": "kt",
		"Name": "Kotlin",
		"elementObj": null
	},
	{
		"id": "rb",
		"Name": "Ruby",
		"elementObj": null
	},
	{
		"id": "c",
		"Name": "C",
		"elementObj": null
	}
]

function filter(){
	var i;
	var toHide = []
	var toShow = []
	var allUnchecked = true

	for(i = 0; i < viewElements.length; i++){
		if(!viewElements[i].elementObj.checked){
			let elements = document.getElementsByClassName(viewElements[i].id + 'c')
			for(var j = 0; j < elements.length; j++){
				toHide.push(elements[j]);
			}
		}else{
			allUnchecked = false
			let elements = document.getElementsByClassName(viewElements[i].id + 'c')
			for(var j = 0; j < elements.length; j++){
				toShow.push(elements[j]);
			}
		}
	}

	for(var i = 0; i < toHide.length; i++){
		toHide[i].style.display = allUnchecked ? "" : "none"
	}

	for(var i = 0; i < toShow.length; i++){
		toShow[i].style.display = ""
	}
}

function listener(e){
	filter()
}

(function() {
	viewElements[0].elementObj = document.getElementById("kt");
	viewElements[1].elementObj = document.getElementById("rb");
	viewElements[2].elementObj = document.getElementById("c");

	for(var i = 0; i < viewElements.length; i++){
		viewElements[i].elementObj.addEventListener('change', listener)
	}
})();