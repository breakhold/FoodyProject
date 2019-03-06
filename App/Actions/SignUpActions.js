import { REGISTER_CHANGE, REGISTER_CREATE, REGISTER_CREATE_SUCCESS, USER_SECOND_STEP_STARTED,REGISTER_FIRST_SUCCEED,REGISTER_EVENT_SECOND_EMPTY,REGISTER_EVENT_EMPTY, REGISTER_CREATE_FAILED_EMAIL } from './types'
import { navigate } from '../Services/Navigator';
import { AsyncStorage } from 'react-native';


export const RegisterChanged = ({ props, value }) => {
    console.log(props + "  " + value)
    return (dispatch) => {
        dispatch({
            type: REGISTER_CHANGE,
            payload: { props, value }
        });
    };
};


export const RegisterFirstStepClick = ({ name, surname, password, email }) => {
   
        return (dispatch) => {
            dispatch({
                type: REGISTER_FIRST_SUCCEED
            });
       
   
       
        const itemsWillBeSave ={
            'name':name,
            'surname':surname,
            'password':password,
            'email':email
        };
        console.log(itemsWillBeSave)
        AsyncStorage.setItem('userFirstScreenInfo', JSON.stringify(itemsWillBeSave))
            .then(() => {
                console.log('It was saved successfully')
            })
            .catch(() => {
                console.log('There was an error saving the product')
            })
        navigate("SignUpSecond")
    };
}

export const RegisterSecondStepClick = ({ sex,birthDate,phoneNumber,City}) => {
    console.log(sex);
        return (dispatch) => {
            dispatch({
                type: USER_SECOND_STEP_STARTED
            });

            const itemsWillBeSave2 = {
                'sex': sex,
                'birthDate': birthDate,
                'phoneNumber': phoneNumber,
                'City': City,
                'name':'',
                'surname':'',
                'password':'',
                'email':''
            }
         AsyncStorage.getItem('userFirstScreenInfo').then((var1)=>{   

            var varle = JSON.parse(var1);
            itemsWillBeSave2.name=varle.name;
            itemsWillBeSave2.surname=varle.surname;
            itemsWillBeSave2.password=varle.password;
            itemsWillBeSave2.email=varle.email;

            console.log("ikinci ")
            console.log(itemsWillBeSave2)




            AsyncStorage.setItem('userSecondScreenInfo',JSON.stringify(itemsWillBeSave2)).then(
                AsyncStorage.getItem('userSecondScreenInfo').then((items) =>{
                    var item2 = JSON.parse(items);
                    console.log(item2)

                })
            )
         })
        

         navigate('ThirdScreen')
            
        };
        
    

}

export const RegisterThirdStepClick = ()=> {
    return (dispatch) => {
        dispatch({
            type: REGISTER_FIRST_SUCCEED
        });
  

    }
}