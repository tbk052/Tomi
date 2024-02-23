/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.mainItem}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.heading}>Tài khoản chính</Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={'wallet'} size={18} color={'#249c44'} />
              <Text
                style={{
                  color: '#249c44',
                  fontSize: 14,
                  fontWeight: '500',
                  paddingHorizontal: 5,
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationColor: 'darkgreen',
                }}>
                1234567891011
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              123.000.000 vnd
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: '5%',
              height: 80,
            }}>
            <View style={{flex: 0.7}} />
            <TouchableOpacity style={styles.mainAccount}>
              <Icon name={'piggy-bank'} size={22} />
            </TouchableOpacity>
            <View style={{flex: 0.7}} />
            <TouchableOpacity style={styles.mainAccount}>
              <Icon name={'clock-rotate-left'} size={22} />
            </TouchableOpacity>
            <View style={{flex: 0.7}} />
            <TouchableOpacity style={styles.mainAccount}>
              <Icon name={'chart-column'} size={22} />
            </TouchableOpacity>
            <View style={{flex: 0.7}} />
            <TouchableOpacity style={styles.mainAccount}>
              <Icon name={'credit-card'} size={22} />
            </TouchableOpacity>
            <View style={{flex: 0.7}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '-2%',
            }}>
            <View style={{flex: 0.4}} />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Nạp tiền</Text>
            </View>
            <View style={{flex: 0.4}} />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Lịch sử giao dịch</Text>
            </View>
            <View style={{flex: 0.4}} />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Báo cáo thu chi</Text>
            </View>
            <View style={{flex: 0.4}} />
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Quản lý thẻ</Text>
            </View>
            <View style={{flex: 0.4}} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.mainItem}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.heading, {flex: 1}]}>Hũ tiết kiệm</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>0.000 vnd</Text>
        </View>
        <Text>Dong buồm ra khơi, tiết kiệm ngay thôi !!! 🫡</Text>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: '3%',
            fontSize: 17,
            fontWeight: '500',
            color: '#8f8e8c',
          }}>
          Bạn chưa có hũ tiết kiệm nào.
        </Text>
      </TouchableOpacity>
      <View style={styles.mainItem}>
        <Text style={styles.heading}>Cùng Tomi khám phá</Text>
      </View>
      <View style={styles.mainItem}>
        <Text style={styles.heading}>Quản lý tài khoản</Text>
        <Icon name={'mobile'} size={20} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainAccount: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#d0e9f2',
  },
  mainItem: {
    margin: '3%',
    padding: '3%',
    borderRadius: 14,
    backgroundColor: 'white',
  },
  heading: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#000000',
  },
});
export default HomeScreen;
