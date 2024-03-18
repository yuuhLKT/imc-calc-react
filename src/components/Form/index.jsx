import { useState, useMemo } from 'react';
import style from './Form.module.css';

const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const imc = useMemo(() => {
        const data = [
            {
                min: 0,
                max: 18.49,
                classification: "Menor que 18,5",
                info: "Magreza",
            },
            {
                min: 18.5,
                max: 24.99,
                classification: "Entre 18,5 e 24,9",
                info: "Normal",
            },
            {
                min: 25,
                max: 29.99,
                classification: "Entre 25,0 e 29,9",
                info: "Sobrepeso",
            },
            {
                min: 30,
                max: 39.99,
                classification: "Entre 30,0 e 39,9",
                info: "Obesidade",
            },
            {
                min: 40,
                max: 99.99,
                classification: "Maior que 40,0",
                info: "Obesidade grave",
            },
        ];
        const imc = (weight / (height * height)).toFixed(2);
        for (let i = 0; i < data.length; i++) {
            if (imc >= data[i].min && imc <= data[i].max) {
                return `Seu IMC é ${imc} (${data[i].classification}), você está na classificação de ${data[i].info}`;
            }
        }
        return 'Preencha todos os campos';
    }, [weight, height]);

    return (
        <form className={style.form}>
            <h2>Calcule seu IMC</h2>
            <input type="number" placeholder="Peso (kg) ex.: 75" className={style.input} onChange={e => setWeight(parseFloat(e.target.value))} />
            <input type="number" placeholder="Altura (m) ex.: 1,75" className={style.input} onChange={e => setHeight(parseFloat(e.target.value))} />
            <p className={style.result}>{imc}</p>
        </form>
    );
};

export default Form;