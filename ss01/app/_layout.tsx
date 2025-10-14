import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Demo } from './demo';
import { ProductDetail } from './ProductDetail';


export function RootLayout() {
  return (
    <SafeAreaView>
      {/* <Demo /> */}
      <ProductDetail />
    </SafeAreaView>
  )
}
