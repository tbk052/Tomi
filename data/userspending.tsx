import {processColor} from 'react-native';
import SpendingTag from './spendingtag';
const userSpending = {
  dataSets: [
    {
      values: SpendingTag.map(x => ({value: x.value, label: x.label})),
      label: '',
      config: {
        sliceSpace: 2,
        // selectionShift: 30,
        drawValues: true,
        valueTextSize: 20,
        colors: SpendingTag.map(c => processColor(c.color)),
      },
    },
  ],
};

export default userSpending;
