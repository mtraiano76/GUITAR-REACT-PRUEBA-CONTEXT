



const ContactoPage = (props) => {
    return(

        <div className="">
        <h2>Fromulario de Contacto</h2>
          <form>
              <label>
                  <input type="text" name="name" placeholder="Ingrese su Nombre"></input>
              </label>
              <label>
                  <input type="text" name="name" placeholder="Ingrese su Apellido"></input>
              </label>
              <label>
                  <input type="text" name="name" placeholder="Ingrese su Email"></input>
              </label>
              <textarea name="textarea" rows="10" cols="100">Envienos su mensaje y nos contactaremos a la brevedad</textarea>
              <label>
              <input class="button" type="submit" value="Enviar"></input>
              </label>
          </form>
      </div>
    );
}
export default ContactoPage;