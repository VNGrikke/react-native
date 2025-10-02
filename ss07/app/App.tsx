import B1 from '@/components/b1'
import B2 from '@/components/b2'
import B3 from '@/components/b3'
import B4 from '@/components/b4'
import B5 from '@/components/b5'
import B6 from '@/components/b6'
import B7 from '@/components/b7'
import B8 from '@/components/B8'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView>
        <ScrollView> 
            <View>
                <B1 />
                <B2 />
                <B3 />
                <B4 />
                <B5 />
                <B6 />
                <B7 />
                <B8 />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

