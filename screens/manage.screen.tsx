/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  processColor,
} from 'react-native';
import Animated, {SlideInRight} from 'react-native-reanimated';
import {LineChart, PieChart} from 'react-native-charts-wrapper';

const ManageScreen = () => {
  const data = {
    dataSets: [
      {
        values: [
          {value: 50, label: 'Slice 1', maker: '50%'},
          {value: 10, label: 'Slice 2', maker: '10%'},
          {value: 40, label: 'Slice 3', maker: '40%'},
        ],
        label: 'Pie Chart',
        config: {
          sliceSpace: 2,
          selectionShift: 30,
          drawValues: true,
          valueTextSize: 20,
          colors: [
            processColor('brown'),
            processColor('red'),
            processColor('blue'),
          ],
        },
      },
    ],
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          margin: '5%',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
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
            123.000
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            borderRadius: 10,
            backgroundColor: 'lightblue',
            justifyContent: 'center',
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
            123.000
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: '5%'}}>
        <Text style={{textAlign: 'center'}}>
          Wow!! bạn thật là một người biết giữ cân bằng cho cuộc sống
        </Text>
      </View>
      <PieChart
        style={{
          width: '100%',
          height: '80%',
          alignSelf: 'center',
        }}
        usePercentValues={true}
        marker={{
          enabled: true,
          digits: 1,
          markerColor: processColor('darkorange'),
          textColor: processColor('black'),
          textSize: 15,
        }}
        styledCenterText={{
          text: 'Tháng 3',
          color: processColor('black'),
          size: 18,
        }}
        holeRadius={40}
        transparentCircleRadius={0}
        entryLabelTextSize={15}
        maxAngle={360}
        chartDescription={{text: 'Hello World', textSize: 15}}
        legend={{
          enabled: true,
          wordWrapEnabled: false,
          horizontalAlignment: 'CENTER',
          form: 'DEFAULT',
          formSize: 20,
          orientation: 'VERTICAL',
          custom: {
            colors: [processColor('black'), processColor('yellow')],
            labels: ['Slice 1', 'Slice 2'],
          },
        }}
        data={data}

        // width={200}
        // height={200}
        // chartConfig={{
        //   color: () => 'yellow',
        // }}
        // accessor="value"
        // backgroundColor="transparent"
        // paddingLeft={15}
        // absolute
      />
    </View>
  );
};
export default ManageScreen;
