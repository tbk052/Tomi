/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, processColor} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';
import userSpending from '../data/userspending';
import SpendingTag from '../data/spendingtag';
import userIncome from '../data/userincome';
import IncomeTag from '../data/incometag';

const ManageScreen = () => {
  const [data, setData] = useState(userSpending);
  const [bgColor1, setBgColor1] = useState('transparent');
  const [bgColor2, setBgColor2] = useState('transparent');
  const [bgColor3, setBgColor3] = useState('pink');
  const [bgColor4, setBgColor4] = useState('lightgreen');
  const [bgColor5, setBgColor5] = useState('transparent');
  const totalSpending = SpendingTag.map(p => p.value).reduce(
    (accumulator, element) => {
      return accumulator + element;
    },
    0,
  );
  const totalIncome = IncomeTag.map(p => p.value).reduce(
    (accumulator, element) => {
      return accumulator + element;
    },
    0,
  );

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          margin: '5%',
        }}>
        <TouchableOpacity
          onPress={() => {
            setBgColor4('lightgreen');
            setBgColor5('transparent');
            setData(userSpending);
          }}
          style={{
            flex: 1,
            backgroundColor: bgColor4,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Tổng tiền ra
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
            }}>
            {totalSpending}.000
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBgColor4('transparent');
            setBgColor5('lightblue');
            setData(userIncome);
          }}
          style={{
            flex: 1,
            borderRadius: 10,
            backgroundColor: bgColor5,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            marginLeft: '2%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Tổng tiền vào
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
            }}>
            {totalIncome}.000
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: '5%'}}>
        <Text style={{textAlign: 'center'}}>
          Wow!! bạn thật là một người biết giữ cân bằng cho cuộc sống
        </Text>
      </View>
      <View style={{flex: 1}}>
        <PieChart
          style={{
            width: '100%',
            height: '90%',
          }}
          animation={{
            durationX: 500,
            durationY: 500,
            easingX: 'EaseInCirc',
          }}
          usePercentValues={true}
          noDataText={'Chưa có báo cáo'}
          holeRadius={40}
          transparentCircleRadius={0}
          entryLabelTextSize={15}
          chartDescription={{text: ''}}
          legend={{
            enabled: true,
            wordWrapEnabled: false,
            maxSizePercent: 100,
            drawInside: false,
            yEntrySpace: 10,
            horizontalAlignment: 'RIGHT',
            verticalAlignment: 'CENTER',
            orientation: 'VERTICAL',
            textSize: 15,
            form: 'SQUARE',
            formSize: 20,
            formToTextSpace: 10,
            custom: {
              colors: SpendingTag.map(c => processColor(c.color)),
            },
          }}
          data={data}
        />
      </View>
      <View style={{flexDirection: 'row', height: '8%', padding: '2%'}}>
        <TouchableOpacity
          onPress={() => {
            setBgColor1('pink');
            setBgColor2('transparent');
            setBgColor3('transparent');
          }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: bgColor1,
            borderRadius: 14,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
            T12/2023
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBgColor1('transparent');
            setBgColor2('pink');
            setBgColor3('transparent');
          }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 14,
            backgroundColor: bgColor2,
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
            T1/2024
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBgColor1('transparent');
            setBgColor2('transparent');
            setBgColor3('pink');
          }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 14,
            backgroundColor: bgColor3,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
            T2/2024
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ManageScreen;
