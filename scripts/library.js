let languages = {
	jv: "Java",
	kt: "Kotlin",
	rb: "Ruby",
	c: "C"
}

let viewElements = [
	{
		"id": "kt",
		"elementObj": null
	},
	{
		"id": "rb",
		"elementObj": null
	},
	{
		"id": "c",
		"elementObj": null
	},
	{
		"id": "jv",
		"elementObj": null
	}
]

let solutions = [
	{
		"problemName": "Breaking the Records",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem"
	},
	{
		"problemName": "Cats and Mouse",
		"platform": "Hacker Rank",
		"languages": ["kt"],
		"descriptionLink": "https://www.hackerrank.com/challenges/cats-and-a-mouse/problem"
	},
	{
		"problemName": "Chocolate Feast",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/chocolate-feast/problem"
	},
	{
		"problemName": "Lattice Paths",
		"platform": "Project Euler",
		"languages": ["c"],
		"descriptionLink": "https://projecteuler.net/problem=15"
	},
	{
		"problemName": "New Year Chaos",
		"platform": "Hacker Rank",
		"languages": ["kt"],
		"descriptionLink": "https://www.hackerrank.com/challenges/new-year-chaos/problem"
	},
	{
		"problemName": "Ransom Note",
		"platform": "Hacker Rank",
		"languages": ["rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/ctci-ransom-note/problem"
	},
	{
		"problemName": "The Hurdle Race",
		"platform": "Hacker Rank",
		"languages": ["kt"],
		"descriptionLink": "https://www.hackerrank.com/challenges/the-hurdle-race/problem"
	},
	{
		"problemName": "Two Strings",
		"platform": "Hacker Rank",
		"languages": ["kt"],
		"descriptionLink": "https://www.hackerrank.com/challenges/two-strings/problem"
	},
	{
		"problemName": "Equalize the Array",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/equality-in-a-array/problem"
	},
	{
		"problemName": "Minimum Swipes 2",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/minimum-swaps-2/problem"
	},
	{
		"problemName": "Counting Valleys",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/counting-valleys/problem"
	},
	{
		"problemName": "Drawing Book",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/drawing-book/problem"
	},
	{
		"problemName": "The Time in Words",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/the-time-in-words/problem"
	},
	{
		"problemName": "Halloween Sale",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/halloween-sale/problem"
	},
	{
		"problemName": "Minimum Distances",
		"platform": "Hacker Rank",
		"languages": ["jv", "kt", "rb"],
		"descriptionLink": "https://www.hackerrank.com/challenges/minimum-distances/problem"
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

function solutionsCompare(sol1, sol2){
	return sol1.problemName.localeCompare(sol2.problemName);
}

function generateSolutionsList(){
	let unorderedList = document.getElementById("solutions-list");

	//solution
	for(var i = 0; i < solutions.length; i++){
		//language
		for(var j = 0; j < solutions[i].languages.length; j++){

			var li = document.createElement("li");
			li.classList.add("list-group-item");
			li.classList.add(solutions[i].languages[j] + "c");

			var icon = document.createElement("i");
			icon.classList.add("devicon-" + languages[solutions[i].languages[j]].toLowerCase() + "-plain");
			icon.classList.add("colored")

			var span =  document.createElement("span");
			span.classList.add("list-icon-padding");
			span.insertAdjacentHTML('afterbegin', solutions[i].problemName + " - " + solutions[i].platform)

			var linkCode = document.createElement("a");
			linkCode.classList.add("marginl20");
			linkCode.classList.add("btn");
			linkCode.classList.add("btn-outline-primary");
			linkCode.setAttribute('target', '_blank');
			linkCode.setAttribute('href', 'codelibrary/' + solutions[i].problemName.toLowerCase().replaceAll(" ", "") + solutions[i].languages[j] + ".html")
			linkCode.insertAdjacentHTML('afterbegin',"Code");

			var linkDescription = document.createElement("a");
			linkDescription.classList.add("marginl20");
			linkDescription.classList.add("btn");
			linkDescription.classList.add("btn-outline-primary");
			linkDescription.setAttribute('target', '_blank');
			linkDescription.setAttribute('href',solutions[i].descriptionLink)
			linkDescription.insertAdjacentHTML('afterbegin',"Description");

			li.appendChild(icon);
			li.appendChild(span);
			li.appendChild(linkCode);
			li.appendChild(linkDescription);

			unorderedList.appendChild(li);
		}
	}
}

function listener(e){
	filter()
}

(function() {
	viewElements[0].elementObj = document.getElementById("kt");
	viewElements[1].elementObj = document.getElementById("rb");
	viewElements[2].elementObj = document.getElementById("c");
	viewElements[3].elementObj = document.getElementById("jv");

	for(var i = 0; i < viewElements.length; i++){
		viewElements[i].elementObj.addEventListener('change', listener)
	}

	solutions.sort(solutionsCompare);

	generateSolutionsList()
})();