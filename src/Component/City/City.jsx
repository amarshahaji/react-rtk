import React, { useCallback } from 'react';
import Chance from 'chance';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, deleteCity } from './CitySlice';

function City() {
    const chance = Chance();
    const dispatch = useDispatch();

    const handleAddCity = useCallback(() => {
        dispatch(addCity(chance.city()));
    }, [chance, dispatch])

    const handleDelete = (index) => {
        console.log(index)
        dispatch(deleteCity(index));
    };

    const data = useSelector(state => state.city);

    return <div>
        <h5>City</h5>
        <button onClick={()=>handleAddCity()}>Add City</button>
        <div>
            <ul>
                {
                    data.map((city, i) => {
                        return <li key={i}>
                            {city}
                            <button onClick={()=>handleDelete(i)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}

export default City;
