import {useEffect, useState} from "react";


export function CarForm () {

    let iniCar = { model: '<enter model here>',
        year: '',
        price: ''
    }

    let [formCar, setFormCar] = useState(iniCar);

    const onInputModel = () => {

    }

    const onInputYear = () => {

    }

    const onInputPrice = () => {

    }


    const onSubmitCarForm = () => {

    }

    return (
        <form name={'CarForm'} onSubmit={onSubmitCarForm}>
            <label for={'model'}> Model: </label>
            <input type={'text'} name={'model'} value={formCar.model} onInput={onInputModel} />
            <input type={'number'} name={'year'} value={formCar.year} onInput={onInputYear} />
            <input type={'number'} name={'price'} value={formCar.price} onInput={onInputPrice} />
            <button type={'submit'} name={'btSave'} value={'Save'}> Save </button>

        </form>
    )
}