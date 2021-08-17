import React, { useState } from 'react'
import './Settings.css'
import { Link } from 'react-router-dom';
import userService from '../../../services/user.service';
import alertService from '../../../services/alert.service';

const COUNTRY_CODES = [
    {
        name: 'México',
        code: 'MX'
    }, 
    {
        name: 'Estados Unidos',
        code: 'US'
    }, 
    {
        name: 'Canada',
        code: 'CA'
    }, 
]

const Settings = () => {

    const [countries] = useState(COUNTRY_CODES)

    const [settingsForm, setSettingsForm] = useState(  
        { 
            address: '',
            photo: '',
            ...JSON.parse( localStorage.getItem('user') ) 
        }
    )

    const saveData = () => {
        console.log(settingsForm);

        const auxSettingsForm = settingsForm
        delete auxSettingsForm['__typename']
        delete auxSettingsForm['username']
        delete auxSettingsForm['id']

        alertService.showLoading()

        userService.updateUser(auxSettingsForm).then( result => {
            console.log(result);
            if ( result.data.updateUser) {
                localStorage.setItem('user', JSON.stringify(settingsForm) )
            }
            alertService.showSuccess()
        } )
        .catch( () => alertService.showError() )
    }

    const setFile = async (e) => {
        if (!e.target.files.length) {
            return;
        }
        resizeImage(e.target.files[0])
    }

    const resizeImage = (file) => {
        console.log( file )
        if (file) {

            let reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = (e) => {

                let img = document.createElement("img");
                img.src = e.target.result;

                img.onload = () => {
                    console.log(e.target.result)

                    let canvas = document.createElement("canvas");
                    let ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0);

                    const MAX_WIDTH = 200;
                    const MAX_HEIGHT = 200;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);

                    const dataUrl = canvas.toDataURL(file.type);
                    setSettingsForm( { ...settingsForm, photo: dataUrl } )
                }

            }
            reader.readAsDataURL(file);

        }
    }

    return (
        <div className="card mt-4">
            <div className="card-body">
                <div className="container">
                    <h3>  
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                        &nbsp;
                        Configuración
                    </h3>
                    
                    <hr />

                    <div>
                        <img id="img-settings" className="settings-image" src={ settingsForm.photo } alt="Foto de perfil" />
                    </div>

                    <br />

                    <label htmlFor="name">Nombre Completo</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input onChange={ (e) => setSettingsForm({ ...settingsForm, name: e.target.value }) } value={ settingsForm.name }
                            id="name" type="text" maxLength="50" className="form-control" placeholder="Nombre Completo" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="country">País</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <select onChange={ (e) => setSettingsForm({ ...settingsForm, country: e.target.value }) } value={ settingsForm.country } className="form-control" id="country">
                            {
                                countries.map( country => <option key={ country.code } value={ country.code }>{ country.name }</option> )
                            }
                        </select>
                    </div>
                    
                    <label htmlFor="city">Ciudad</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input onChange={ (e) => setSettingsForm({ ...settingsForm, city: e.target.value }) } value={ settingsForm.city } 
                            id="city" type="text" maxLength="50" className="form-control" placeholder="Ciudad" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="addres">Dirección</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input onChange={ (e) => setSettingsForm({ ...settingsForm, address: e.target.value }) } value={ settingsForm.address } 
                            id="addres" type="text" maxLength="50" className="form-control" placeholder="Dirección" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="phone">Teléfono</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input onChange={ (e) => setSettingsForm({ ...settingsForm, phone: e.target.value }) } value={ settingsForm.phone } 
                            id="phone" type="tel" maxLength="10" className="form-control" placeholder="Teléfono" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input onChange={ (e) => setSettingsForm({ ...settingsForm, email: e.target.value }) } value={ settingsForm.email } 
                            id="email" type="text" maxLength="50" className="form-control" placeholder="Email" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    <label htmlFor="file">Foto</label>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input onChange={ setFile } accept="image/png, image/gif, image/jpeg" id="file" type="file" maxLength="50" className="form-control" placeholder="Foto" aria-label="name" aria-describedby="basic-addon1" />
                    </div>

                    
                    <button type="button" className="btn btn-link mt-5 mb-2">
                        <Link to="/home">Cancelar</Link>
                    </button>

                    <button onClick={ saveData } type="button" className="btn btn-primary float-right mt-5 mb-2">Guardar</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Settings
