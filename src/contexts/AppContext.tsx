import React, { useReducer, useEffect } from 'react'
import {Plugins} from '@capacitor/core'

const { Storage} = Plugins

export interface AppData {
    names: string[]
}

const DEFAULT_APPDATA: AppData = {
    names: []
}

export interface AppDataAction {
    action: (
        { type: 'add', nameToInsert: string}
    ) | (
        {type: 'delete', indexToDelete: number}
    ) | (
        { type: 'initialize', state: AppData}
    )
}

export const AppContext = React.createContext<[AppData, React.Dispatch<AppDataAction>]>([DEFAULT_APPDATA, () => {}])

export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}:React.PropsWithChildren<{}>) => {
    const reducer = useReducer(
        (state: AppData, { action }: AppDataAction): AppData => {
            switch(action.type){
                case 'add':
                    return {
                        ...state,
                        names: [action.nameToInsert,
                        ...state.names]
                    }
                case 'delete':
                    const newNames = [...state.names]
                    newNames.splice(action.indexToDelete, 1)    
                    return{
                        ...state,
                        names: newNames
                    }
                case 'initialize':
                    return action.state
                }
        }, 
        DEFAULT_APPDATA
    )

    useEffect(() => {
        Storage.get({key: 'appContext'}).then((value)=>{
            if(!value.value){return}

            const state: AppData = JSON.parse(value.value)

            reducer[1]({action: {type: 'initialize', state}})
            
            }).catch(()=>{})
    }, [])

    return (
        <AppContext.Provider value={reducer}>
            {children}
        </AppContext.Provider>
    )
}