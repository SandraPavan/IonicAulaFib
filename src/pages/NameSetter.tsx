import React, { useState, useRef } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, IonInput } from '@ionic/react'

const NameSetter: React.FC = () => { 

    const inputRef = useRef<HTMLIonInputElement>(null)
    const [title,setTitle] = useState('Esse é seu nome')

    return <div style = {{
        marginTop: '10px',
        border: 'solid 1px black'
    }}>        
          <IonText>{title}</IonText>
          <IonInput ref={inputRef} type="text" placeholder="Digite seu nome" ></IonInput>
          <IonButton onClick={() => { setTitle(inputRef.current!.value ?? '')}}>Definir</IonButton>
    </div>
    }
export default NameSetter;


