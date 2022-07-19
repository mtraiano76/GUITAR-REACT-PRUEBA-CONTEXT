import React, { useState, useEffect } from "react"
import Modelo from "./ModeloSinLogin"
import { getAllModelos } from '../Services/modelosServices'
import Row from "react-bootstrap/Row"
import Loading from "./Loading"

function Modelos() {
    const [loading, setLoading] = useState(true)
    const [modelos, setModelos] = useState([])
    const [buscar, setBuscar] = useState('Gibson')

    useEffect(
        () => {
            const request = async () => {
                try {
                    const response = await getAllModelos(buscar)
                    console.log(response)
                    setModelos(response)
                    //setModelos(response.results)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }

            }
            request()
        },
        [buscar]
    )
    const handleChange = (event) => {
        const value = event.target.value
        setBuscar(value)
    }

    const titulo = "PRODUCTOS"
    return (
        <Loading loading={loading} configuration={{variant:"danger"}}>
            <div>
                <h3>{titulo}</h3>
                <input value={buscar} onChange={handleChange}></input>
                <Row>
                    {modelos.map(productoData => <Modelo key={productoData.id} data={productoData.data()} id={productoData.id} />)}
                </Row>
            </div>
        </Loading>
    )
}
export default Modelos



