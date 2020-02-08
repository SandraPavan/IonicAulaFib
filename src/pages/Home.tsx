import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import NameSetter from './NameSetter';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       <NameSetter></NameSetter>
       <NameSetter></NameSetter>
       <NameSetter></NameSetter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
