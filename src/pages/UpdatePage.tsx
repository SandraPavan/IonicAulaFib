import React, { useContext } from 'react'
import { IonPage, IonHeader, IonTitle, IonContent, IonButtons, IonBackButton, IonToolbar } from '@ionic/react'
import { useHistory, useParams } from 'react-router'
import { AppContext } from '../contexts/AppContext'
import NameSetter from '../components/NameSetter'

type UpdateParams = {
    idx?: string
}

const UpdatePage: React.FC = () => {
    const params: UpdateParams = useParams()
    if(params.idx === undefined){
        throw new Error('Cade o id')
    }
    const idx = parseInt(params.idx)
    const [appDate, dispatchAppData] = useContext(AppContext)
    const initialName = appDate.names[idx]
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }
    return(
        <IonPage id="update">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton/>
                </IonButtons>
                <IonTitle>Atualizar</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <NameSetter
                initialValue={initialName}
                placeholder="Mude o nome"
                buttonTitle="Atualizar"
                onNameSet={(name) => {
                    dispatchAppData({
                        action: {
                            type: 'update',
                            at:idx, to:name
                        }
                    })
                    handleBack()
                }}
            />           
        </IonContent>
    </IonPage>
    )
}

export default UpdatePage