import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

interface Employee {
  id: string;
  name: string;
}

const employeesData: Employee[] = [
  { id: '1', name: 'Nguyễn Văn An' },
  { id: '2', name: 'Trần Thị Bình' },
  { id: '3', name: 'Lê Văn Cường' },
  { id: '4', name: 'Phạm Thị Dung' },
  { id: '5', name: 'Hoàng Văn Em' },
  { id: '6', name: 'Vũ Thị Phương' },
  { id: '7', name: 'Đặng Văn Giang' },
  { id: '8', name: 'Bùi Thị Hoa' },
  { id: '9', name: 'Ngô Văn Ích' },
  { id: '10', name: 'Đinh Thị Kim' },
];

const EmployeeItem: React.FC<{ employee: Employee }> = ({ employee }) => (
  <View style={styles.employeeItem}>
    <Text style={styles.employeeName}>{employee.name}</Text>
  </View>
);

const EmployeeList: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <FlatList
        data={employeesData}
        renderItem={({ item }) => <EmployeeItem employee={item} />}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<HeaderComponent />}
        ListFooterComponent={<FooterComponent />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingVertical: 16,
  },
  employeeItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
    padding: 16,
    elevation: 1,
    borderLeftWidth: 3,
    borderLeftColor: '#007bff',
  },
  employeeName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
});

export default EmployeeList;
