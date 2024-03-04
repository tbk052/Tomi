/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ExperienceScreen = () => {
  return (
    <View style={{flex: 1, paddingVertical: 30, paddingHorizontal: 20}}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={{flex: 1, fontSize: 18, color: '#000', fontWeight: '700'}}>
          Đặc Quyền Tomi Points
        </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Chức năng sẽ sớm ra mắt. Tomi xin lỗi vì sự bất tiện này :<',
            );
          }}>
          <Text style={{color: '#4384d9'}}> Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Chức năng sẽ sớm ra mắt. Tomi xin lỗi vì sự bất tiện này :<',
            );
          }}
          style={{
            width: 360,
            height: 300,
            marginRight: 10,
            borderRadius: 12,
            borderWidth: 0.5,
          }}>
          <View
            style={{
              width: 360,
              height: 200,
              backgroundColor: 'green',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
          <Text
            numberOfLines={2}
            style={{
              marginTop: 5,
              paddingHorizontal: 5,
              paddingLeft: 25,
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#000',
            }}>
            <View
              style={{
                backgroundColor: '#fc9b32',
                paddingHorizontal: 8,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}>
                SỨC KHỎE
              </Text>
            </View>
            Ưu đãi dành cho bạn mới: Trải nghiệm 1 tháng tập thử cùng 3 buổi tập
            với HLV Yoga chuyên nghiệp
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              paddingHorizontal: 8,
            }}>
            <Icon
              name={'shield-cat'}
              size={22}
              color={'#ffa02b'}
              style={{marginHorizontal: 5}}
            />
            <Text style={{marginRight: 30, fontSize: 16}}> 100 điểm</Text>
            <Icon name={'calendar-xmark'} size={15} style={{marginRight: 10}} />
            <Text>Ngày hết hạn: 30/06/2024</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Chức năng sẽ sớm ra mắt. Tomi xin lỗi vì sự bất tiện này :<',
            );
          }}
          style={{
            width: 360,
            height: 300,
            marginRight: 10,
            borderRadius: 12,
            borderWidth: 0.5,
          }}>
          <View
            style={{
              width: 360,
              height: 200,
              backgroundColor: 'darkorange',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />
          <Text
            numberOfLines={2}
            style={{
              marginTop: 5,
              paddingHorizontal: 5,
              paddingLeft: 25,
              fontSize: 15,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#000',
            }}>
            <View
              style={{
                backgroundColor: '#fc9b32',
                paddingHorizontal: 8,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}>
                THỜI TRANG
              </Text>
            </View>
            lÌ xì đầu xuân - tận hưởng voucher độc quyền
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              paddingHorizontal: 8,
            }}>
            <Icon
              name={'shield-cat'}
              size={22}
              color={'#ffa02b'}
              style={{marginHorizontal: 5}}
            />
            <Text style={{marginRight: 30, fontSize: 16}}> 50 điểm</Text>
            <Icon name={'calendar-xmark'} size={15} style={{marginRight: 10}} />
            <Text>Ngày hết hạn: 30/04/2024</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default ExperienceScreen;
