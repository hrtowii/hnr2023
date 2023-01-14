import {  View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useState, useContext, useCallback, useMemo, useRef, useEffect } from 'react';
import Constants from 'expo-constants';
import { ApplicationProvider, Layout, Text, Button, Modal, Input } from '@ui-kitten/components';
import * as Animatable from 'react-native-animatable';

import Logo from "../assets/logo.svg";
import { CoffeeContext } from "../components/context/CoffeeContext";

import {
  BottomSheet,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import Icon from 'react-native-vector-icons/FontAwesome';

function EditItem({value, name,  setValue, extraLabel, step}){
  const setVal = setValue;
  function decrement(){
    setVal(value - step);
  }
  function increment(){
    setVal(value + step);
  }
  return <Layout style={{flexDirection: "column", width:"100%", padding:30}}>
    <Text style={{fontSize:20, marginLeft:'auto', marginRight:"auto"}}>{name}</Text>
    <View style={{flexDirection: "row", marginLeft:"auto", marginRight:"auto"}}>
      <TouchableOpacity activeOpacity={1} onPress={decrement} style={{float:"right", marginRight:10}}>
        <Icon name="minus" size={30} color="#000" />
      </TouchableOpacity>
      <Input  
        style={{width:80}}
        keyboardType='numeric'
        value={value.toString()}
        onChangeText={(text)=>{setVal(parseInt(text))}}
      />
      <Text style={{fontSize:16, marginTop:8, marginLeft:10}}>{extraLabel}</Text>
      <TouchableOpacity activeOpacity={1} onPress={increment} style={{float:"right", marginLeft:10}}>
        <Icon name="plus" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  </Layout>
}
export default function Brew({navigation, route}){
  
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['90%'], []);
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);
  
    const coffee = useContext(CoffeeContext);
    
    const [settings, setSettings] = useState({
      ratio: 60,
      coffee: 15, // gramms
      water: 250, // gramms
    });
    const roundNum = (value) => parseFloat(value.toFixed(1));
    function setCoffee(value){
      const prevRatio = settings.ratio;
      if (value < 0) return
      setSettings({
        ...settings,
        coffee: value,
        water: roundNum(value/ prevRatio * 1000),
      })
    }
    function setWater(value){
      const prevRatio = settings.ratio;
      if (value < 0) return
      setSettings({
        ...settings,
        water: value,
        coffee: roundNum( value * prevRatio / 1000),
      })
    }
    function setRatio(value){
      setSettings({
        ...settings,
        coffee: settings.coffee / settings.ratio * value,
        ratio: value,
      })
    }
    function getRatio(){
      return settings.ratio
    }
    
    useEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    }, [navigation]);
  
    return <BottomSheetModalProvider>
      <Layout style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
        >
          <Layout style={{padding:10, alignItems: "center",
             backgroundColor: '#ffffff', height:"100%",
            borderTopLeftRadius: 20, borderTopRightRadius: 20,
          }}>
            <Text style={{fontSize:30, fontWeight: "bold", marginBottom:10,}}>Settings</Text>
            <EditItem value={getRatio()} setValue={setRatio} name="Ratio" extraLabel="g/ℓ" step={5}/>
            <EditItem value={settings.water} setValue={setWater} name="Water" extraLabel="g" step={5}/>
            <EditItem value={settings.coffee} setValue={setCoffee} name="Coffee" extraLabel="g" step={1}/>
          </Layout>
        </BottomSheetModal>
        
      <Text style={{
         marginTop:"20%", marginLeft:'auto', marginRight:'auto',fontSize:40, maxWidth:"80%", fontWeight: "bold"
      }}>{coffee.name}</Text>
      <View style={{padding:10}}></View>
      
      <TouchableOpacity 
        style={{marginTop:"40%", marginLeft: 'auto', marginRight: 'auto'}} 
        onPress={()=>{navigation.navigate("Timer", {recipe,ratio})}}
      >
        <Pressable style={styles.ButtonClick} onPress={
            () => {
            navigation.navigate('Timer', {
              duration: 10
            })
            }
          }>
          <Text style={styles.Text}>Brew</Text>
        </Pressable>
      </TouchableOpacity>
      <View style={{padding:10}}></View>
      <Pressable style={{marginTop:"30%",marginLeft:"auto", marginRight:"auto"}} onPress={handlePresentModalPress}>
        <Text style={{borderColor:"#6F4E37", borderWidth: 1, borderRadius: 100, padding: 12, width:120, textAlign: "center"}}>Configure</Text>
      </Pressable>
    </Layout>
    </BottomSheetModalProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: 'center',*/
    alignContent: 'center', 
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonClick: {
    width: 200,
    height: 200,
    borderColor: '#6F4E37',
    borderRadius: 100,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
