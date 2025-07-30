import { useDispatch } from 'react-redux'
import { removeFromList } from '../features/cars/carsSlice'
import { useSelector } from 'react-redux'

function CarList() {
  const cars = useSelector((state) => state.counter.items)

  const dispatch = useDispatch()

  const onClick = (car) => {
    // Yapılacak: Arabayı silin
    dispatch(removeFromList(car))
  }

  const renderedCars = cars.map((car, i) => {
    return (
      <div key={i} className="panel">
        <p>
          {car.name} - ${car.value} -{car.count}
        </p>
        <button className="button" onClick={() => onClick(car)}>
          Sil
        </button>
      </div>
    )
  })

  return (
    <div className="car-list">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars">Başlamak için araba ekleyin</div>
      )}
    </div>
  )
}

export default CarList
