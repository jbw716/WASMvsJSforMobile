import { IonButton, IonItem, IonList } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
  class Calculation {
    public number!: number;
    public multiplier!: number;
    public result!: number;
  }

  const number = 5;
  let numbers: number[] | null = null;
  const [time, setTime] = useState<number>(0);

  const calculate = () => {
    const start = Date.now();
    const calculations: Calculation[] = [];
    for (let i = 1; i <= 1_000_000; i++) {
      calculations.push({
        number,
        multiplier: i,
        result: number * i
      });
    }
    setTime(Date.now() - start);
  };

  const generateAndSortNumbers = () => {
    const start = Date.now();
    generateArrayOfRandomNumbers();
    sortArrayOfRandomNumbers();
    console.log(numbers);
    setTime(Date.now() - start);
  }

  const generateArrayOfRandomNumbers = () => {
    const array: number[] = [];
    for (let i = 0; i < 1_000_000; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    numbers = array;
  }

  const sortArrayOfRandomNumbers = () => {
    if (!numbers) return;
    numbers.sort();
  }

  const generatePrimeNumbers = () => {
    const start = Date.now();
    const primeNumbers: number[] = [];
    let number = 2;
    while (primeNumbers.length < 1_000_000) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
      number++;
    }
    setTime(Date.now() - start);
  }

  const isPrime = (n: number) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true
  }

  return (
    <IonList>
      <IonItem>
        <IonButton onClick={calculate}>Generate Multiplication Tables</IonButton>
      </IonItem>
      <IonItem>
        <IonButton onClick={generateAndSortNumbers}>Generate and sort numbers</IonButton>
      </IonItem>
      <IonItem>
        <IonButton onClick={generatePrimeNumbers}>Generate prime numbers</IonButton>
      </IonItem>
      {!!time &&
        <IonItem>
          <p>Did that in {time} ms</p>
        </IonItem>
      }
    </IonList>
  );
};

export default Home;