/*Set all recipe text to not display*/
function setUp(event){
	let text = document.getElementsByClassName("booze");
	for(let i = 0; i < text.length; i++){
	  	console.log(text[i]);
	  	 text[i].style.display='none';
  	}
}

function showGin(event){

	showRecipe(document.getElementById("gin"));
}

function showRum(event){

	showRecipe(document.getElementById("rum"));
}

function showTequila(event){

	showRecipe(document.getElementById("tequila"));
}

function showVodka(event){

	showRecipe(document.getElementById("vodka"));
}

function showWhiskey(event){

	showRecipe(document.getElementById("whiskey"));
}

/*Displays text if current not shown. Otherwise sets display to none*/
function showRecipe(x){
	if(x.style.display == "none"){
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
	}
};

/*Event Listeners*/
document.addEventListener("DOMContentLoaded", setUp);
document.getElementById("ginRecipes").addEventListener("click", showGin);
document.getElementById("rumRecipes").addEventListener("click", showRum);
document.getElementById("tequilaRecipes").addEventListener("click", showTequila);
document.getElementById("vodkaRecipes").addEventListener("click", showVodka);
document.getElementById("whiskeyRecipes").addEventListener("click", showWhiskey);
