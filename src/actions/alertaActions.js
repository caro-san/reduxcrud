import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types/index';

//Muestra alerta
export function mostrarAlerta(alerta){
    return (dispatch) => {
        dispatch ( crearMostrarAlerta(alerta) )
    }
}

const crearMostrarAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

// ocultar alerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch( ocultarAlerta() )
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})