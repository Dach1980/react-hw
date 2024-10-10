import React, {useState} from 'react';
import moment from "moment";
function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function higherOrderComponent(Component, date) {
  return class extends React.Component {
    updateDate(date) {
      const now = moment(new Date())
      const targetDate = moment(new Date(date))
      const diffInDays = now.diff(targetDate, 'days')
      const diffInHours = now.diff(targetDate, 'hours')
      const diffInMinutes = now.diff(targetDate, 'minutes')
      if (diffInDays > 1) {
        return diffInDays + this.declOfNum(diffInDays, [' день', ' дня', ' дней']) + ' назад';
      }
      if (diffInDays < 1 && diffInHours >= 1) {
        return diffInHours + this.declOfNum(diffInHours, [' час', ' часа', ' часов']) + ' назад';
      }
      if (diffInDays < 1 && diffInHours < 1) {
        return diffInMinutes + this.declOfNum(diffInMinutes, [' минута', ' минуты', ' минут']) + ' назад';
      }
    }

    declOfNum(number, words) {
      return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }

    render() {
      return <Component {...this.props} date={ this.updateDate(date) } />
    }
  }
}

function Video(props) {
  const DateTimePretty  = higherOrderComponent(DateTime, props.date)
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-08-18 14:19:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-08-18 15:15:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-08-18 10:19:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-08-16 14:19:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}