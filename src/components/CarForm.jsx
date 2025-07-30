import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToList } from '../features/cars/carsSlice'

function CarForm() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(addToList({ name, value }))

    setName('')
    setValue('')
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle ">Araba Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Marka</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Fiyat</label>
          <input
            className="input"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-link">Gönder</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
