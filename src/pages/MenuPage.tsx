import React, { useState } from 'react'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonAvatar, IonRippleEffect } from '@ionic/react'
import { home, person } from 'ionicons/icons'
import {Plugins, CameraPhoto, CameraResultType} from '@capacitor/core'

const {Camera} = Plugins

const MenuPage: React.FC = () => {
    const [avatar, setAvatar] = useState('')
    const handleChangeAvatar = async () => {
        const photo: CameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            allowEditing: true
        })
        setAvatar(photo.webPath!)
    }
    return(
        <IonMenu type="overlay" contentId="main">
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <IonAvatar className="ion-activatable" onClick={handleChangeAvatar}
                     style={{overflow: 'hidden',background:'red',cursor:'pointer'}}>
                        <img src={avatar} alt="avatar do usuario"/>
                        <IonRippleEffect/>
                    </IonAvatar>
                </div>
                <IonList>
                    <IonItem button routerLink="/tabs">
                        <IonIcon icon={person}/>
                        <IonLabel>Nomes</IonLabel>
                    </IonItem>
                    <IonItem button routerLink="/home">
                        <IonIcon icon={home}/>
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>

    )
}
export default MenuPage