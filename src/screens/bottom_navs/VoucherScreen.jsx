import { StyleSheet, Image, SafeAreaView  } from 'react-native'
import React from 'react'
import asyncStorage from '../../utils/myAsyncStorage'

const VoucherScreen = (props) => {

  const abc = () => {
    asyncStorage.readData()
  }
  return (

    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/images/bottom_voucher.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    </SafeAreaView>

  )
}

export default VoucherScreen


const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})









