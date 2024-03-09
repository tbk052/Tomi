/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ImageSlider} from 'react-native-image-slider-banner';
import userProfile from '../data/userprofile';
import {useNavigation} from '@react-navigation/native';
import useUserAPI from '../data/API/userAPI';

const HomeScreen = () => {
  const {getUserAPI, items} = useUserAPI();
  const navigation: any = useNavigation();
  useEffect(() => {
    getUserAPI();
  }, []);

  console.log(items);

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
                {userProfile.bankAccountNum}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {userProfile.mainbalance} vnd
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ManageScreen');
              }}
              style={styles.mainAccount}>
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
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            {userProfile.subBalances} vnd
          </Text>
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
      <View style={{margin: '3%', borderRadius: 14, backgroundColor: 'white'}}>
        <Text style={[styles.heading, {padding: '3%'}]}>
          Cùng Tomi khám phá
        </Text>
        <ImageSlider
          data={[
            {img: require('../res/img/tomi-banner-1.png')},
            {img: require('../res/img/tomi-banner-2.png')},
            {img: require('../res/img/tomi-banner-3.png')},
          ]}
          localImg={true}
          autoPlay={true}
          timer={6000}
          closeIconColor="yellow"
          caroselImageStyle={{
            marginVertical: -30,
          }}
        />
      </View>
      <View style={styles.mainItem}>
        <Text style={styles.heading}>Quản lý</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: '5%',
            height: 80,
          }}>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'user'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'lock'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'bullhorn'} size={22} />
          </TouchableOpacity>
          <View style={{flex: 0.7}} />
          <TouchableOpacity style={styles.mainAccount}>
            <Icon name={'gears'} size={22} />
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
            <Text style={{textAlign: 'center'}}>Tài khoản</Text>
          </View>
          <View style={{flex: 0.4}} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Phương thức bảo mật</Text>
          </View>
          <View style={{flex: 0.4}} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Thông báo</Text>
          </View>
          <View style={{flex: 0.4}} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Cài đặt</Text>
          </View>
          <View style={{flex: 0.4}} />
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
    textTransform: 'capitalize',
    color: '#000000',
  },
});
export default HomeScreen;
