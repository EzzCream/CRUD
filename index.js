const listaGatos = JSON.parse(localStorage.getItem('Michis'));
if (!listaGatos) {
	console.log('No existe');
	const michi = {
		nombre: 'Miu',
		raza: 'Americano',
		link: 'https://t1.ea.ltmcdn.com/es/razas/1/7/8/gato-americano-de-pelo-corto_871_0_orig.jpg',
	};
	localStorage.setItem('Michis', JSON.stringify([michi]));
	window.location.reload();
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
            <div class="accordion accordion-flush" id="accordionFlushExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingOne">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							Actualizar
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						class="accordion-collapse collapse"
						aria-labelledby="flush-headingOne"
						data-bs-parent="#accordionFlushExample"
						style="width: 200px"
					>
						<div class="accordion-body">
							<input
								class="form-control form-control-lg m-1"
								type="text"
								id="nombre"
								placeholder="Nombre"
                                value= "${listaGatos[index].nombre}"
							/>
							<input
								class="form-control form-control-lg m-1"
								type="text"
								id="raza"
								placeholder="Raza"
                                value= "${listaGatos[index].raza}"
							/>
							<input
								class="form-control form-control-lg m-1"
								type="text"
								id="link"
								placeholder="Link img"
                                value= "${listaGatos[index].link}"
							/>
						</div>
					</div>
				</div>
			</div>
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
