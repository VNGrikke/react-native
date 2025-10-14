import EmployeeList from '@/components/EmployeeList'
import EmptyListDemo from '@/components/EmptyListDemo'
import FilterProduct from '@/components/FilterProduct'
import LoadRefresh from '@/components/LoadRefresh'
import SectionListComponent from '@/components/SectionListComponent'
import B7 from '@/components/b7'
import B8 from '@/components/b8'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView>
        <EmptyListDemo />  
        <EmployeeList />
        <FilterProduct />
        <SectionListComponent />
        <LoadRefresh />
        <B7 />
        <B8 />
    </SafeAreaView>
  )
}
