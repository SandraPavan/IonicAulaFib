import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import NameSetter, { NameSetterProps } from '../components/NameSetter';
import NameList from '../components/NameList';

const NameListSetter: React.FC<NameSetterProps> = ({
    initialValue, placeholder, buttonTitle
}: NameSetterProps) => {
  const [names, setNames] = useState<string[]>([])
  const addName = (name: string) => {
    const newNames = [name, ...names]
    setNames(newNames)
  }
  return (
      <>  
        <NameSetter
        initialValue="Meu nome é"
        placeholder="Seu nome"
        buttonTitle="Definir seu nome"
        onNameSet={addName} />
        <NameList names={names} onDelete={(at: number) => {
            const newNames = [...names]
            newNames.splice(at, 1)
            setNames(newNames)
        }}/>
       </>
     
  );
};

export default NameListSetter;
