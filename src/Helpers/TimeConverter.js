import moment from 'moment';

export default function convertTime(time) {
  let t = new Date(time * 1000);
  let newDate = moment(t).format('MMM Do YY');
  return newDate;
}
