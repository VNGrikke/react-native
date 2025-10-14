import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  B1  from '../components/ProfileCard'
import B2 from '../components/Flexbox'
import B3 from '../components/Post'
import B5 from '../components/Header'
import B4 from '../components/FormLogin'
import B6 from '../components/ProductGrid'
import B8 from '../components/ArticleScreen'


export default function Layout() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 ,display:'flex', justifyContent:'center', alignItems:'center'}}>
        <B1/>
        <B2/>
        <B3/>
        <B4/>
        <B5/>
        <B6/>
        <B8/>
      </ScrollView>
    </SafeAreaView>
  )
}
