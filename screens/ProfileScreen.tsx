import { StyleSheet } from "react-native";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ProfileScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tela do Perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title:{
            fontSize: 20,
            fontWeight: 'bold',
        }
    }
)