import React, { ComponentType } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { DateTimeProps } from '../types';

moment.locale('ru');

function DateTimePretty<P extends DateTimeProps>(WrappedComponent: ComponentType<P>) {
  const ComponentWithPrettyDate: React.FC<P> = (props) => {
    const { date, ...rest } = props;

    const formatDate = (dateString: string): string => {
      const dateTime = moment(dateString);
      const now = moment();

      const diffMinutes = now.diff(dateTime, 'minutes');

      if (diffMinutes < 60) {
        return `${diffMinutes} минут назад`;
      } else if (diffMinutes < 24 * 60) {
        const hours = Math.floor(diffMinutes / 60);
        return `${hours} часов назад`;
      } else {
        const days = Math.floor(diffMinutes / (24 * 60));
        return `${days} дней назад`;
      }
    };

    const prettyDate = formatDate(date);

    return <WrappedComponent date={prettyDate} {...(rest as any)} />;
  };

  ComponentWithPrettyDate.displayName = `DateTimePretty(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithPrettyDate;
}

export default DateTimePretty;
