export function pushPublicacion(contenido="Contenido por defecto", titulo="Titulo por defecto", imagen="https://picsum.photos/200", url="localhost:5173/", token="ONE_SIGNAL_KEY", id=""){
    let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type':'application/json',
        'Authorization':'Basic '+token,
    })
    
    const datos = {data: {
        app_id: "e5d10809-0365-462f-b9c8-64ddc8638765", // ID de nuestra app de One Signal //safari_web_id: "web.onesignal.auto.41aef4b6-51a4-4778-92bc-f3aa3e26acde",
        data: {mensaje: `Titulo: ${titulo}`},
        contents: {en: contenido.substring(0, 25) + '...'},
        url: `http://localhost:5173/publicaciones/${id}`,
        //headings:{en: `Nueva publicacion de: ${empresa}`}
        headings:{en: `Nueva publicacion`}
    }}
    
    return fetch('https://onesignal.com/api/v1/notifications', {method:'POST',headers, body: JSON.stringify(datos)})//return instance.request(datos)
}