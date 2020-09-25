import React from 'react';
import { StyleSheet, View, Text, ScrollView,TouchableOpacity } from 'react-native';
import Colors from '../../templates/Colors';
import i18n from 'i18n-js';
import { TUTORIAL } from '../../datas/data-tutorial';

const ListItem = props =>{
    
    console.log(props);
    return(
        <View style={{padding:15,paddingLeft:20,borderBottomWidth:1,borderBottomColor:"#c7c7c7"}}>
            
        <TouchableOpacity onPress={()=>{
            props.navigation.navigate('MoveTutorial',{titleId:props.data.id});
            }}>
            <Text style={{fontWeight:"500",fontSize:16}}>{props.data.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const AllTutorialScreen = props => {
    console.log(TUTORIAL);
    return (
        <ScrollView>
            <View style={styles.container}>
         
                {TUTORIAL.map(item=> <ListItem data={item} navigation={props.navigation} key={Math.random()}/>)}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
    },

});

export default AllTutorialScreen;