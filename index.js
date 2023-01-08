const listaGatos = JSON.parse(localStorage.getItem('Michis'));
if (!listaGatos) {
	console.log('No existe');
	const michi = {
		nombre: 'Miu',
		raza: 'Americano',
		link: 'https://t1.ea.ltmcdn.com/es/razas/1/7/8/gato-americano-de-pelo-corto_871_0_orig.jpg',
	};
	localStorage.setItem('Michis', JSON.stringify([michi]));
}

for (let index = 0; index < listaGatos.length; index++) {
	console.log(listaGatos);
	console.log(index);
}

function addCat() {
	const nombre = document.getElementById('nombre').value;
	const raza = document.getElementById('raza').value;
	const link = document.getElementById('link').value;
	const obj = {
		nombre,
		raza,
		link,
	};
	const listaGatos = JSON.parse(localStorage.getItem('Michis'));
	listaGatos.push(obj);
	localStorage.setItem('Michis', JSON.stringify(listaGatos));
	console.log(listaGatos);
}
