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

let ren = '';

for (let index = 0; index < listaGatos.length; index++) {
	const ind = `
        <div class="card">
            <div class="card-image">
                <img
                    class="img-gato"
                    src="${listaGatos[index].link}"
                    alt=""
                />
            </div>
            <div class="category">Raza: ${listaGatos[index].raza}</div>
            <div class="heading">Nombre: ${listaGatos[index].nombre}</div>
            <button type="button" onclick="deleteCat('${listaGatos[index].nombre}')" class="btn btn-light">
				Borrar
			</button>
            <button type="button" onclick="deleteCat('${listaGatos[index].nombre}')" class="btn btn-light">
				Actualizar
			</button>
        </div>`;
	ren = ind + ren;
}

const div = (document.getElementById('main').innerHTML = ren);

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
	window.location.reload();
}

const deleteCat = (list) => {
	const resultado = listaGatos.filter((res) => res.nombre != list);
	localStorage.setItem('Michis', JSON.stringify(resultado));
	window.location.reload();
};
