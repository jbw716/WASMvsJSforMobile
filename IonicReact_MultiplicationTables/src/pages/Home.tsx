import { IonButton, IonItem, IonList } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
  const number = 5;
  const size = 1_000_000;
  const [time, setTime] = useState<number>(0);

  const timeFunction = (fn: Function) => {
    const start = Date.now();
    fn();
    setTime(Date.now() - start);
    return time;
  }

  const calculateMultiplicationTable = () => {
    timeFunction(() => {
      const calculations: number[] = [];
      for (let i = 0; i < size; i++) {
        calculations[i] = number * (i + 1);
      }
    });
  };

  const generateAndSortNumbers = () => {
    timeFunction(() => {
      const numbers: number[] = new Array(size);
      for (let i = 0; i < size; i++) {
        numbers[i] = Math.floor(Math.random() * 100);
      }
      numbers.sort();
    });
  }

  const generatePrimeNumbers = () => {
    timeFunction(() => {
      const primeNumbers: number[] = [];
      for (let n = 2; primeNumbers.length < size; n++) {
        if (isPrime(n)) {
          primeNumbers.push(n);
        }
      }
    });
  }

  const isPrime = (n: number) => {
    var boundary = Math.floor(Math.sqrt(n));
    if (n === 1) return false;
    if (n === 2) return true;
    for (let i = 2; i <= boundary; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  return (
    <IonList>
      <IonItem>
        <IonButton onClick={calculateMultiplicationTable}>Generate Multiplication Tables</IonButton>
      </IonItem>
      <IonItem>
        <IonButton onClick={generateAndSortNumbers}>Generate and sort numbers</IonButton>
      </IonItem>
      <IonItem>
        <IonButton onClick={generatePrimeNumbers}>Generate prime numbers</IonButton>
      </IonItem>
      {time > 0 &&
        <IonItem>
          <p>Did that in {time} ms</p>
        </IonItem>
      }
    </IonList>
  );
};

export default Home;