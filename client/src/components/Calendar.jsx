import { useState } from 'react';
import '../styles/Calendar.css';

export default function Calendar() {
  const [currentDate] = useState(new Date());
  
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate.getDate();
      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isToday ? 'today' : ''}`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <button className="calendar-nav">←</button>
        <h4>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h4>
        <button className="calendar-nav">→</button>
      </div>
      
      <div className="calendar-grid">
        <div className="calendar-day weekday">Su</div>
        <div className="calendar-day weekday">Mo</div>
        <div className="calendar-day weekday">Tu</div>
        <div className="calendar-day weekday">We</div>
        <div className="calendar-day weekday">Th</div>
        <div className="calendar-day weekday">Fr</div>
        <div className="calendar-day weekday">Sa</div>
        {renderCalendar()}
      </div>
    </div>
  );
}