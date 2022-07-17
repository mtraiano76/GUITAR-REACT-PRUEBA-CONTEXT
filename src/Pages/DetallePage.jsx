import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/modelosServices"
import Loading from "../Components/Loading"
function DetallePage() {
    const { id } = useParams()
    console.log("Id", id)
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    useEffect(
        () => {
            try {
                const request = async () => {
                    const response = await getByIdProductos(id)
                    console.log("response", response.data())
                    setLoading(false)
                    setProducto(response.data())
                }
                request()
            } catch (e) {
                console.log(e)
            }
        },
        [id]
    )

    return (
        <Loading loading={loading}>
            <div className="detalle">
                <p>Marca: {producto.name}</p>
                <p>Modelo: {producto.description}</p>
                <p>$ {producto.price}</p>
            </div>
        </Loading>
    )
}



export default DetallePage