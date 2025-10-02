import B1 from '@/components/B1-4'
import B2 from '@/components/B2'
import B3 from '@/components/B3'
import B5 from '@/components/B5'
import B6 from '@/components/B6'
import B7 from '@/components/B7'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <B1 />
        <B2 />
        <B3 />
        <B5 /> 
        <B6 />
        <B7 />
      </ScrollView>
    </SafeAreaView>
  )
}

