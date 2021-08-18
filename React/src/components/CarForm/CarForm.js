import './CarForm.css';

import {useEffect, useState} from "react";
import {getCar, postCar, updCar} from "../../services/data.connector";


export function CarForm ({carId, cbRequestUpdate}) {

    // console.log('<CarFORM>');
    let [formCar, setFormCar] = useState({id: '', model: 'RangeRover', price: '98000', year: '2018' });
    let [validationErrMsg, setValidationErrMsg] = useState(false);
    let [ModelInvalid, setModelInvalid] = useState(false);
    let [YearInvalid, setYearInvalid] = useState(false);
    let [PriceInvalid, setPriceInvalid] = useState(false);

    useEffect( () => {
        return carId && getCar(carId).then( car => {
            // console.log('<CarFORM> Car for EDIT fetched car =', car);
            setFormCar(car);
        });
    }, [carId])

    const onInputModel = (e) => {
        isModelValid(e.target.value);
        setFormCar({...formCar, model: e.target.value});
    }
    const onInputPrice = (e) => {
        isPriceValid(e.target.value);
        setFormCar({...formCar, price: e.target.value});
    }
    const onInputYear = (e) => {
        isYearValid(e.target.value);
        setFormCar({...formCar, year: e.target.value});
    }


    const onBlurModel = (e) => {
        if (!isModelValid(e.target.value)) {
            e.preventDefault()
            return;
        }
    }
    const onBlurPrice = (e) => {
        if (!isPriceValid(e.target.value)) {
            e.preventDefault();
            return
        }
    }
    const onBlurYear = (e) => {
        if (!isYearValid(e.target.value)) {
            e.preventDefault();
        }
    }


    const onSubmitCarForm = (e) => {
        e.preventDefault();
        if (isModelValid(formCar.model)
                && isYearValid(formCar.year)
                && isPriceValid(formCar.price) ) {
            if (formCar.id) {
                updCar(formCar)
                    .then( () => cbRequestUpdate());
            } else {
                postCar(formCar)
                    .then( () => cbRequestUpdate());
            }
            setFormCar({id: '', model: '', year: '', price: ''});
        } else {
            setValidationErrMsg('Field validation FAILED - Save is NOT ALLOWED ! ');
        }
    }

    const isModelValid = (value) => {
        if (/^[a-zA-Z]{1,20}$/.test(value)) {
            setValidationErrMsg(false);
            setModelInvalid(false);
            return true;
        } else {
            setValidationErrMsg('Validation error: Model name may comprise ONLY letters and be no longer than 20 symbols!');
            setModelInvalid(true);
            return false;
        }
    }
    const isPriceValid = (value) => {
        if (value <= 0) {
            setValidationErrMsg('Validation error: Price can\'t be less or equal to 0 !');
            setPriceInvalid(true);
            return false;
        } else {
            setValidationErrMsg(false);
            setPriceInvalid(false);
            return true;
        }
    }
    const isYearValid = (value) => {
        if (value < 1990 || value > 2021) {
            setValidationErrMsg('Validation error: Year can\'t be out of interval [1990 - 2021] !');
            setYearInvalid(true);
            return false;
        } else {
            setValidationErrMsg(false);
            setYearInvalid(false);
            return true;
        }
    }

        return (
        <form name={'CarForm'} className={'carForm'} onSubmit={onSubmitCarForm}>
            <div className={'carFormGrid'}>
                <label htmlFor={'model'}> Model: </label>
                <input type={'text'} name={'model'} value={formCar.model} onInput={onInputModel}
                       onBlur={onBlurModel} className={ModelInvalid ? 'validErr':''} />
                <label htmlFor={'model'}>Year: </label>
                <input type={'number'} name={'year'} value={formCar.year} onInput={onInputYear}
                       onBlur={onBlurYear} className={YearInvalid ? 'validErr':''} />
                <label htmlFor={'price'}> Price: </label>
                <input type={'number'} name={'price'} value={formCar.price} onInput={onInputPrice}
                       onBlur={onBlurPrice} className={PriceInvalid ? 'validErr':''} />
                <button type={'submit'} name={'btSave'} value={'Save'}> Save </button>
            </div>
            <div className={'validationErrMsg'}>
                { validationErrMsg && <p>{validationErrMsg}</p>}
            </div>
        </form>
    )
}