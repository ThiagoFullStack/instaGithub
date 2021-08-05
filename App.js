import 'react-native-gesture-handler'
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image , ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function InstaGithubCard({githubUser}){
  const [liked, setLikeState] = useState(false)
  return(
    <View>
      {/* InstaCardHeader */}
    <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center'}}>
    
    <Image 
    style={{
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
  }} 
 source={{
    uri: `https://github.com/${githubUser}.png`
}}
 />
 <Text>{githubUser}</Text>
 </View>

 {/* InstaCardImage */}
 <Image style={{
     width: '100%',
     height: 350,
}} 
 source={{
   uri: `https://github.com/${githubUser}.png`
}}
 />

 {/* Footer */}
 <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center'}}>
  
  <TouchableOpacity onPress={()=> setLikeState(!liked)}>
    {liked &&  <Ionicons name="heart-sharp" size={24} color="red"/>}
    {!liked &&  <Ionicons name="heart-sharp" size={24} color="black" />}
 </TouchableOpacity>

 </View>
 {/* Footer */}
 </View>
 )
}


export default function App() {

return (
    <SafeAreaView style={styles.container}>
  <ScrollView >
    {
    [
    'ThiagoFullStack',
    'tuliofaria',
    'gabrielfroes'
    ].map((githubUser)=>
      <InstaGithubCard key={githubUser} githubUser={githubUser} />
    )}
  </ScrollView>
  </SafeAreaView>
);
}


const styles = StyleSheet.create({
  container:{
flex: 1,
backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center'

  },
})

