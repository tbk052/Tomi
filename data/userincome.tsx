import {processColor} from 'react-native';
import IncomeTag from './incometag';
const userIncome = {
  dataSets: [
    {
      values: IncomeTag.map(x => ({value: x.value, label: x.label})),
      label: '',
      config: {
        sliceSpace: 2,
        // selectionShift: 30,
        drawValues: true,
        valueTextSize: 20,
        colors: IncomeTag.map(c => processColor(c.color)),
      },
    },
  ],
};

export default userIncome;
