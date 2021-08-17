import Swal from "sweetalert2";

class Alert {
    showLoading() {
        return Swal.fire({
            title: '¡Cargando!',
            html: '¡Espera un momento por favor!',
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
            }
          })
    }

    showError() {
        return Swal.fire(
            '¡Ocurrio un error!',
            '¡La operación no pudo completarse, intenta de nuevo más tarde!',
            'error'
        ) 
    }

    showSuccess() {
        return Swal.fire(
            '¡Operación exitosa!',
            '¡La operación se completo exitosamente!',
            'success'
        ) 
    }

    showErrorLogin() {
        return Swal.fire(
            '¡Inicio de sesión incorrecto!',
            '¡Las credenciales no son validas!',
            'error'
        ) 
    }

    showSuccessLogin() {
        return Swal.fire(
            '¡Bienvenido!',
            '¡Haz iniciado sesión exitosamente!',
            'success'
        ) 
    }
}

export default new Alert();