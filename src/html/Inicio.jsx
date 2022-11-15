import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../css/inicio.css";

export const Inicio = () => {

    const [contactos, setContactos] = useState([]);
    const [tablaContactos, setTablaContactos] = useState([]);
    const [mostarunContacto, setMostrarUnContacto] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [cajaNombre, setCajaNombre] = useState(false);
    const [cajaapp, setCajaAPP] = useState(false);
    const [cajaapm, setCajaAPM] = useState(false);
    const [cajacalle, setCajaCalle] = useState(false);
    const [cajanum_ext, setCajaNum_Ext] = useState(false);
    const [cajanum_int, setCajaNum_Int] = useState(false);
    const [cajacolonia, setCajaColonia] = useState(false);
    const [cajacp, setCajaCP] = useState(false);
    const [cajatelefono, setCajaTelefono] = useState(false);
    const [cajacorreo, setCajaCorreo] = useState(false);
    const [show, setShow] = useState(false);


    const validarCampoNombre = (e) => {
        console.log(e.target.validity.valid);
        if (e.target.validity.valid === false) {
            setCajaNombre(true);
        } else {
            setCajaNombre(false); 
        }
    }
    
    const validarCampoApp = (e) =>{
        if (e.target.validity.valid === false){
            setCajaAPP(true);
        }else{
            setCajaAPP(false);
        }
    }
    const validarCampoApm = (e) =>{
        if (e.target.validity.valid === false){
            setCajaAPM(true);
        }else{
            setCajaAPM(false);
        }
    }
    const validarCampoCalle = (e) =>{
        if (e.target.validity.valid === false){
            setCajaCalle(true);
        }else{
            setCajaCalle(false);
        }
    }
    const validarCampoNum_Ext = (e) =>{
        if (e.target.validity.valid === false){
            setCajaNum_Ext(true);
        }else{
            setCajaNum_Ext(false);
        }
    }
    const validarCampoNum_Int = (e) =>{
        if (e.target.validity.valid === false){
            setCajaNum_Int(true);
        }else{
            setCajaNum_Int(false);
        }
    }
    const validarCampoColonia = (e) =>{
        if (e.target.validity.valid === false){
            setCajaColonia(true);
        }else{
            setCajaColonia(false);
        }
    }
    const validarCampoCP = (e) =>{
        if (e.target.validity.valid === false){
            setCajaCP(true);
        }else{
            setCajaCP(false);
        }
    }
    const validarCampoTelefono = (e) =>{
        if (e.target.value.lenght > 10){
            setCajaTelefono(true);
        }else{
            setCajaTelefono(false);
        }
    }


    const TablaContactos = async () => {
        try {
            const data = await fetch(`http://localhost/pkt1contactosBackend/index.php/ContactoController/FullContactos`)
            const contacto = await data.json();
            setContactos(contacto);
            setTablaContactos(contacto);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        TablaContactos();
    }, []);

    const handleBusquedaChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    //buscar
    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = tablaContactos.filter((elemnto) => {
            if (elemnto.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemnto;
            }
        })
        setContactos(resultadoBusqueda);
    }

    const EliminarContacto = async (id) => {
        fetch(`http://localhost/pkt1contactosBackend/index.php/ContactoController/DeleteContacto/${id}`)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El contacto ha sido eliminado',
            showConfirmButton: false,
            allowOutsideClick: false
        })
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    //Guardar Contactos

    const enviarContactos = (e) => {
        e.preventDefault();
    }

    const Guardar = () => {
        if (cajaNombre === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo nombre',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajaapp === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo apellido paterno',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajaapm === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo apellido materno',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajacalle === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo calle',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajanum_ext === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo número exterior',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajanum_int === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo número interior',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajacolonia === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo colonia',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajacp === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo código postal',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajatelefono === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo teléfono',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        } else {
            fetch("http://localhost/pkt1contactosBackend/index.php/ContactoController/save", {
                method: 'POST',
                body: new FormData(document.getElementById("contactos"))
            }).then(res => res.json())
                .catch(error => console.log('Ocurrió un error al guardar el contacto', error))
                .then(response => console.log(response));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El contacto ha sido guardado',
                showConfirmButton: false,
                allowOutsideClick: false
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }

    //Mostrar un registro por id

    const MostrarContactoId = async (id) => {
        try {
            const data = await fetch(`http://localhost/pkt1contactosBackend/index.php/ContactoController/ObtenerUnContacto/${id}`)
            const contacto = await data.json();
            setMostrarUnContacto(...contacto);
        } catch (err) {
            console.log(err.message);
        }
        setShow(true);
    }

    //Modificar el formulario

    const handleContacto = (e) => {
        setMostrarUnContacto({
            ...mostarunContacto,
            [e.target.name]: e.target.value
        });
    }

    const GuardarCambios = (id) => {
        if (cajaNombre === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo nombre',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajaapp === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo apellido paterno',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajaapm === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo apellido materno',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajacalle === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo calle',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajanum_ext === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo número exterior',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajanum_int === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo número interior',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajacolonia === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo colonia',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajacp === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo código postal',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else if (cajatelefono === true) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Favor de llenar correctamente el campo teléfono con n',
                showConfirmButton: true,
                allowOutsideClick: false
            })
        }else {
            fetch(`http://localhost/pkt1contactosBackend/index.php/ContactoController/UpdateContacto/${id}`, {
                method: 'POST',
                body: new FormData(document.getElementById('contactos'))
            }).then(res => res.json())
                .catch(error => console.log('Ocurrió un error al actualizar el contacto: ', error))
                .then(response => console.log(response));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El contacto ha sido editado',
                showConfirmButton: false,
                allowOutsideClick: false
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }
        return (
            <>
                <header>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control buscar" id="floatingInput" value={busqueda} onChange={handleBusquedaChange} />
                        <label htmlFor="floatingInput">Buscar por nombre del contacto</label>
                    </div>
                </header>
                <div className="tabla">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido Paterno</th>
                                <th scope="col">Apellido Materno</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactos.map(item => (
                                <tr key={item.idcontacto}>
                                    <th scope="row">{item.idcontacto}</th>
                                    <td>{item.nombre}</td>
                                    <td>{item.app}</td>
                                    <td>{item.apm}</td>
                                    <td>{item.calle} {item.num_int} {item.num_ext} {item.cp} {item.colonia}</td>
                                    <td>{item.telefono}</td>
                                    <td>{item.correo}</td>
                                    <td className="acciones">
                                        <button className="btn btn-warning btnEditar" onClick={() => MostrarContactoId(item.idcontacto)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg></button>
                                        <button className="btn btn-danger btnCancelar" onClick={() => EliminarContacto(item.idcontacto)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg></button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="card formulario">
                    <form onSubmit={enviarContactos} id="contactos">
                        <div className="form-floating mb-3" id="divnombre">
                            <input type="text" className="form-control" id="idnombre" name="nombre" value={mostarunContacto?.nombre} onChange={handleContacto} placeholder="Teclear Nombre" pattern="[a-zA-ZÀ-ÿ\s]{1,40}" minlength="1" maxlength="40" onKeyUp={(e) => validarCampoNombre(e)} required />
                            <label htmlFor="nombre">Nombre*</label>
                        </div>
                        <div className="form-floating mb-3" id="divapp">
                            <input type="text" className="form-control" id="idapp" name="app" value={mostarunContacto?.app} onChange={handleContacto} placeholder="Teclear Apellido Paterno" pattern="[a-zA-ZÀ-ÿ\s]{1,40}" minlength="1" maxlength="40" onKeyUp={(e) => validarCampoApp(e)} required />
                            <label htmlFor="app">Apellido Paterno*</label>
                        </div>
                        <div className="form-floating mb-3" id="divapm">
                            <input type="text" className="form-control" id="idapm" name="apm" value={mostarunContacto?.apm} onChange={handleContacto} placeholder="Teclear Apellido Materno" pattern="[a-zA-ZÀ-ÿ\s]{1,40}" minlength="1" maxlength="40" onKeyUp={(e) => validarCampoApm(e)} />
                            <label htmlFor="apm">Apellido Materno</label>
                        </div>
                        <div className="form-floating mb-3" id="divcalle">
                            <input type="text" className="form-control" id="idcalle" name="calle" value={mostarunContacto?.calle} onChange={handleContacto} placeholder="Teclear Calle" pattern="[a-zA-ZÀ-ÿ\d\s]{1,40}" minlength="1" maxlength="40" onKeyUp={(e) => validarCampoCalle(e)} required />
                            <label htmlFor="calle">Calle*</label>
                        </div>
                        <div className="form-floating mb-3" id="divnum_int">
                            <input type="number" className="form-control" id="idnum_int" name="num_int" value={mostarunContacto?.num_int} onChange={handleContacto} placeholder="Teclear número interior" pattern="\d{1,10}" minlength="1" maxlength="10" onKeyUp={(e) => validarCampoNum_Int(e)} />
                            <label htmlFor="num_int">Número Interior</label>
                        </div>
                        <div className="form-floating mb-3" id="divnum_ext">
                            <input type="number" className="form-control" id="idnum_ext" name="num_ext" value={mostarunContacto?.num_ext} onChange={handleContacto} placeholder="Teclear número exterior" pattern="\d{4,10}" minlength="4" maxlength="10" onKeyUp={(e) => validarCampoNum_Ext(e)} required />
                            <label htmlFor="num_ext">Número Exterior*</label>
                        </div>
                        <div className="form-floating mb-3" id="divcp">
                            <input type="number" className="form-control" id="idcp" name="cp" value={mostarunContacto?.cp} onChange={handleContacto} placeholder="Teclear Código Postal" pattern="\d{5}" maxlength="5" onKeyUp={(e) => validarCampoCP(e)} required />
                            <label htmlFor="cp">Código Postal*</label>
                        </div>
                        <div className="form-floating mb-3" id="divcolonia">
                            <input type="text" className="form-control" id="idcolonia" name="colonia" value={mostarunContacto?.colonia} onChange={handleContacto} placeholder="Teclear Colonia" pattern="[a-zA-ZÀ-ÿ\d\s]{5,40}" minlength="5" maxlength="40" onKeyUp={(e) => validarCampoColonia(e)} required />
                            <label htmlFor="colonia">Colonia*</label>
                        </div>
                        <div className="form-floating mb-3" id="divtelefono">
                            <input type="number" className="form-control" id="idtelefono" name="telefono" value={mostarunContacto?.telefono} onChange={handleContacto} placeholder="Teclear Teléfono" pattern="\d{10}" maxlength="10" onKeyUp={(e) => validarCampoTelefono(e)} required />
                            <label htmlFor="telefono">Teléfono*</label>
                        </div>
                        <div className="form-floating mb-3" id="divcorreo">
                            <input type="email" className="form-control" id="idcorreo" name="correo" value={mostarunContacto?.correo} onChange={handleContacto} placeholder="Teclear Correo" />
                            <label htmlFor="correo">Correo</label>
                        </div>
                    </form>
                    <div className="acciones">
                        {show === false ? <button className="guardar" onClick={Guardar}>Guardar</button> :
                        <button className="guardarcambios" onClick={() => GuardarCambios(mostarunContacto.idcontacto)}>Guardar Cambios</button>}
                    </div>
                </div>
            </>
        );
    }