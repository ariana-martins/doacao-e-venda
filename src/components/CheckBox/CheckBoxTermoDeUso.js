import React, { useState } from 'react';
import { View, } from 'react-native';

import { CheckBox } from '@rneui/themed';


export default function CheckBoxTermoDeUso() {
 

    const [isSelected, setSelected] = useState(false);

//Se precisar utilizar "Aceito os termos de uso" no App.

    return (
        <View>

        <CheckBox 
            title="Eu aceito os termos de uso"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="red"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)} 
        />

        </View>
    )

}


