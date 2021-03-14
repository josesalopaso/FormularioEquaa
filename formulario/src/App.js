import React, {useState} from 'react';
import { Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';

const App = () => {
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
  	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
  	const [genero, cambiarGenero] = useState({campo: '', valido: null});
  	const [fecha, cambiarFecha] = useState({campo: '', valido: null});
  	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		fecha: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, 
		genero: /^(H|h|M|m|Otro)$/
	}
	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}
	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			apellido.valido === 'true' &&
			correo.valido === 'true' &&
     		genero.valido === 'true' &&
			fecha.valido === 'true' &&
     		terminos
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
      		cambiarApellido({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: null});
			cambiarGenero({campo: '', valido: null});
			cambiarFecha({campo: '', valido: null});


			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<form action="" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="Escriba su nombre"
					name="nombre"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Escriba su apellido"
					name="apellido"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>        
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="usuario@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
        <Input
					estado={genero}
					cambiarEstado={cambiarGenero}
					tipo="text"
					label="Genero"
					placeholder="H/M/Otro"
					name="genero"
					leyendaError="El genero solo puede ser H,M u Otro"
					expresionRegular={expresiones.genero}
				/>      
				<Input
					estado={fecha}
					cambiarEstado={cambiarFecha}
					tipo="text"
					label="Fecha"
					placeholder="dd/mm/yyyy"
					name="telefono"
					leyendaError="Escriba correctamente la fecha"
					expresionRegular={expresiones.fecha}
				/>

        <ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContenedorTerminos>

				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</form>
		</main>
	);
}
 
export default App;