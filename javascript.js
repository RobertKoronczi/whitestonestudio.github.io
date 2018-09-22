
// minden páratlan paraméter a menüpont szövegét tartalmazza, a párosak pedig a linkelt html címét
var toggle = false;

function createNavbar() {
		const navbar = document.createElement('div');  //navbar div létrehozása
	    navbar.setAttribute('class', 'navbar');
	    document.getElementById('navbar-container').appendChild(navbar);

	   
	for (var i = 0; i < arguments.length; i+=2) {  //kettesével léptetjük
    	const span = document.createElement('span');
    	const a = document.createElement('a');
    	const t = document.createTextNode(arguments[i]);

    	span.setAttribute('class', 'nav-bar-item');
    	a.setAttribute('href', arguments[i+1] + ".html") //minden második paraméter beolvasunk html linkként

    	a.appendChild(t);
        span.appendChild(a);
        navbar.appendChild(span);
    }
}

function removeNavbar() {
	document.querySelector('#navbar-container').innerHTML = '';
}


const navButton = document.getElementById('navbar-button');

navButton.addEventListener('click', function() {
	    toggle = !toggle;
	    if(toggle===true) {
	    	createNavbar('főoldal', 'index', 'bemutatkozás', 'introduction', 'galéria', 'gallery', 'referencia', 'reference', 'zeneszerzés', 'composition', 'zajszűrés', 'denoising');
	    } else {
	    	removeNavbar()
	    }
		
});


