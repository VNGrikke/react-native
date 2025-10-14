import BusinessCard from '@/components/BusinessCard'
import Calculator from '@/components/Calculator'
import ColorPicker from '@/components/ColorPicker'
import Counter from '@/components/Counter'
import LikeButton from '@/components/LikeButton'
import LoginForm from '@/components/LoginForm'
import TodoList from '@/components/TodoList'
import TrafficLight from '@/components/Traffic'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function App() {
  return (
    <SafeAreaView>
        <ScrollView>
            <BusinessCard imageUrl="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/11/top-meme-meo-cuc-dang-yeu-27.png.webp" name="Nguyen Van Vuong" title="Lap trinh vien Java" phone="0367675699" />
            <BusinessCard imageUrl="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/11/top-meme-meo-cuc-dang-yeu-27.png.webp" name="Nguyen Van A" title="Lap trinh vien Python" phone="0367675698" />
            <Counter/>
            <LikeButton/>
            <LoginForm/>
            <TodoList/>
            <Calculator/>
            <TrafficLight/>
            <ColorPicker/>
        </ScrollView>
    </SafeAreaView>
  )
}
