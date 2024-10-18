import { IonButton, IonInput, IonItem, IonList } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
  class Calculation {
    public number!: number;
    public multiplier!: number;
    public result!: number;
  }

  let number: number | null = null;
  const [time, setTime] = useState<number>(0);

  const handleInput = (event: CustomEvent) => {
    number = event.detail.value;
  };

  const calculate = () => {
    if (!number) return;
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

  return (
    <IonList>
      <IonItem>
        <IonInput type="number" label="Enter a number here" label-placement="floating" placeholder="Enter a number" onIonInput={handleInput}>
        </IonInput>
        <IonButton onClick={calculate}>Calculate!</IonButton>
      </IonItem>
      {!!time &&
        <IonItem>
          <p>Calculation took {time} ms</p>
        </IonItem>
      }
    </IonList>
  );
};

export default Home;