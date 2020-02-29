import React, {useContext} from 'react'
import NameList from './NameList'
import {AppContext} from '../contexts/AppContext'
import ContextualNameSetter from './ContextualNameSetter'

const ContextualNameList: React.FC = () => {
    const [appData, dispatchAppData] = useContext(AppContext)
    return (
        <NameList
            names={appData.names}
            onDelete={(at) => {
                dispatchAppData({ 
                    action: {type: 'delete', indexToDelete: at}
                })
            }}
        />
    )
}

export default ContextualNameList