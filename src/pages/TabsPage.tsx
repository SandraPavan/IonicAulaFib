import React from 'react'
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonIcon } from '@ionic/react'
import ListPage from './ListPage'
import { Route, Redirect } from 'react-router'
import Home from './Home'
import { home, list } from 'ionicons/icons'

const TabsPage: React.FC = () => {
    return(
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/tabs/list" component={ListPage}/>
                <Route path="/tabs/home" componet={Home}/>
                <Route path="/tabs" render={() => <Redirect to ="/tabs/home"/>}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="tertiary">
                <IonTabButton tab="home" href="/home">
                    <IonTitle></IonTitle>
                    <IonIcon icon={home}/>
                </IonTabButton>
                <IonTabButton tab="list" href="/tabs/list">
                    <IonTitle></IonTitle>
                    <IonIcon icon={list}/>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}
export default TabsPage