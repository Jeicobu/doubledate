import React from 'react';

import Input from './basic-components/Input.js';
import Checkbox from './basic-components/Checkbox.js';
import Select from './basic-components/Select.js';


class RegistrationForm extends React.Component {
    render () {
        return (
            <div>
                <Input customClassNames={['registrationInput']} placeholder='Nick name of couple'/>
                <Checkbox label='Yata'/>
                <Select customClassNames={['resigtrationSelect']} trigger='Select city'/>
            </div>
        )
    }
}

export default RegistrationForm