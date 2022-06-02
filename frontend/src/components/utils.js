export const getTravelDates = (start, end) => {
  const startArr = start.split('-');
  const endArr = end.split('-');
  const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  }
  const startMonth = months[startArr[1]]
  const endMonth = months[endArr[1]]
  let startDate = startArr[2]
  let endDate = endArr[2]

  if (startDate[0] == 0) {
    startDate = startDate[1];
  };
  if (endDate[0] == 0) {
    endDate = endDate[1];
  };

  if (startMonth === endMonth) {
    return `${startMonth} ${startDate}-${endDate}, ${startArr[0]}`
  } else {
    return `${startMonth} ${startDate}-${endMonth} ${endDate}, ${startArr[0]}`
  };
};