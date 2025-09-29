import CounterScreen from '@/components/CounterScreen'
import LightBulbScreen from '@/components/LightBulbScreen'
import LoginForm from '@/components/LoginForm'
import UserInfoCard from '@/components/UserInfoCard'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import B5 from '@/components/b5/App'
import B6 from '@/components/b6/App'
import RegisterForm from '@/components/RegisterForm'


export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
      <Text>Home page</Text>
      <Text>B1:</Text>
      <UserInfoCard
        name="Nguyễn Văn A"
        avatarUrl="https://i.pravatar.cc/150?u=a1"
        email="nguyenvana@example.com"
        />
      <UserInfoCard
        name="Trần Thị B"
        avatarUrl="https://i.pravatar.cc/150?u=a2"
        email="tranthib@example.com"
      />
      <Text>B2:</Text>
      <CounterScreen />
      <Text>B3:</Text>
      <LightBulbScreen />
      <Text>B4:</Text>
      <LoginForm />
      <Text>B5:</Text>
      <B5/>
      <Text>B6:</Text>
      <B6/>
      <Text>B7:</Text>
      <RegisterForm />
      <Text>B8:</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
