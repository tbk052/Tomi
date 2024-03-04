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

const ExploreScreen = () => {
  return (
    <ScrollView>
      <View style={styles.mainItem}>
        <Text style={styles.heading}>Tiện ích</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: '5%',
            height: 80,
          }}>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'file-lines'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'mobile-screen'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'location-dot'} size={22} />
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
            <Text style={{textAlign: 'center'}}>Thanh toán hóa đơn</Text>
          </View>
          <View style={{flex: 0.4}} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Nạp tiền điện thoại</Text>
          </View>
          <View style={{flex: 0.4}} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Tìm ATM</Text>
          </View>
          <View style={{flex: 0.4}} />
        </View>
      </View>

      <View style={styles.mainItem}>
        <Text style={styles.heading}>Cộng đồng</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: '5%',
            height: 80,
          }}>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'users-line'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'user-plus'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'users-viewfinder'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          {/* <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'gears'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} /> */}
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
            <Text style={{textAlign: 'center'}}>Người nhận</Text>
          </View>
          <View style={{flex: 0.4}} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Mời bạn bè</Text>
          </View>
          <View style={{flex: 0.4}} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Nhóm người nhận</Text>
          </View>
          <View style={{flex: 0.4}} />
          {/* <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Cài đặt</Text>
          </View>
          <View style={{flex: 0.4}} /> */}
        </View>
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
    color: '#000000',
  },
});
export default ExploreScreen;
