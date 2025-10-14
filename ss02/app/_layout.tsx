import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import B1 from '../components/BusinessCard';
import B2 from '../components/CountNumber';
import B3 from '../components/NameForm';
import B4 from '../components/TermsScreen';
import B5 from '../components/LoginScreen';
import B6 from '../components/TodoApp';
import B7 from '../components/ChatScreen';
import B8 from '../components/CustomButton';
import ProductDetail from '@/components/ProductDetail';


const Layout = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <B1/>
        <B2/>
        <B3/>
        <B4/>
        <B5/>
        <B6/>
        <B7/>
        <B8/>
        <ProductDetail/>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Layout;
