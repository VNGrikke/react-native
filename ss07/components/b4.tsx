import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo';

const getVietnameseType = (type: string | undefined) => {
  if (!type) return 'Không xác định';
  switch (type) {
    case 'wifi':
      return 'wifi';
    case 'cellular':
      return 'cellular';
    case 'none':
      return 'Không có';
    default:
      return type;
  }
};

export default function B4() {
const netInfo = useNetInfo();
  
  const isConnectedText = netInfo.isConnected ? 'Có' : 'Không';
  const connectionType = getVietnameseType(netInfo.type);

  return (
    <View style={styles.container}>
      
      <Text style={styles.sectionTitle}>TRẠNG THÁI KẾT NỐI MẠNG</Text>

      <View style={styles.statusRow}>
        <Text style={styles.labelText}>Có kết nối không?</Text>
        <Text style={styles.valueText}>{isConnectedText}</Text>
      </View>

      <View style={styles.statusRow}>
        <Text style={styles.labelText}>Loại kết nối:</Text>
        <Text style={styles.valueText}>{connectionType}</Text>
      </View>

      <Text style={styles.debugText}>
        Trạng thái chi tiết: {netInfo.type} - Có Internet: {netInfo.isInternetReachable ? 'Có' : 'Không'}
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  labelText: {
    fontSize: 18,
    color: '#333',
    marginRight: 5,
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'lowercase', 
  },
  debugText: {
      marginTop: 20,
      fontSize: 12,
      color: '#999',
      textAlign: 'center',
  }
});