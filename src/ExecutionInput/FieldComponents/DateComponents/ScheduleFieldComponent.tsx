import * as React from "react";
import {useEffect, useState} from "react";
import {PropsField, TimeFormat} from "../../interfaces";
import {compareDates, getDaysOfWeek, getHoursSchedule, getSchedule, goToElement, isMobileOrPad} from "../../Utils";


export default ({
                  required,
                  value,
                  onChange
                }: PropsField) => {

  const [scheduleValue, setScheduleValue] = useState<Date>();
  const tomorrow = new Date(), dayAfterTomorrow = new Date();
  const [scheduleTimeOfDayValue, setScheduleTimeOfDayValue] = useState<"Morning" | "Afternoon" | "Evening" | null>(null);
  const [scheduleTimeValue, setScheduleTimeValue] = useState<TimeFormat>({hour: 0, minutes: 0});
  const [times, setTimes] = useState<Array<TimeFormat>>([]);
  const [result, setResult] = useState<Date>();
  useEffect(() => {
    setTimes(getHoursSchedule(scheduleTimeOfDayValue));
  }, [scheduleTimeOfDayValue]);


  useEffect(() => {
    if (result && onChange) {
      onChange(result);
    }
  }, [result]);

  useEffect(() => {
    if (scheduleValue && scheduleTimeOfDayValue && scheduleTimeValue.hour) {
      let date = new Date(scheduleValue.getFullYear(), scheduleValue.getMonth(), scheduleValue.getDate());
      date.setHours(scheduleTimeValue.hour);
      date.setMinutes(scheduleTimeValue.minutes);
      setResult(date);
    }
  }, [scheduleValue, scheduleTimeOfDayValue, scheduleTimeValue]);

  tomorrow.setDate(tomorrow.getDate() + 1);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  const days = [
    {day: "Today", value: new Date()},
    {day: "Tomorrow", value: tomorrow},
    {day: getDaysOfWeek(dayAfterTomorrow.getDay()), value: dayAfterTomorrow}];
  const timeDay: Array<"Morning" | "Afternoon" | "Evening"> = ["Morning", "Afternoon", "Evening"];

  useEffect(() => {
    if (value) {
      const val = new Date(value);
      if ((!result || val.getTime() !== result.getTime())) {
        setScheduleValue(val);
        if (compareDates(val, new Date()) || compareDates(val, tomorrow) || compareDates(val, dayAfterTomorrow)) {
          const schedule = getSchedule(val.getHours());
          if (schedule) {
            const time = getHoursSchedule(schedule).find(a => a.minutes === val.getMinutes() && a.hour === val.getHours());
            if (time) {
              setScheduleTimeOfDayValue(schedule);
              setScheduleTimeValue(time);
            }
          }
        }
      }
    }
  }, [value]);

  return (
    <div className="form-group hm-p-0">
      {" "}
      <div className="hm-m-auto">
        <label className="hm-schedule-title">Date</label>
        <div className="hm-w-100 hm-schedule-buttons-container">
          {days.map((a, i) => (
            <label
              key={i}
              className={(compareDates(scheduleValue, a.value) ?
                " hm-schedule-highlight-button" : " hm-schedule-normal-button") +
              " hm-d-flex hm-just-center hm-align-items-center"}
              htmlFor={i + "sh"}>
              <input required={required} id={i + "sh"} className="hm-invisible hm-position-absolute"
                     onChange={() => setScheduleValue(a.value)}
                     checked={compareDates(scheduleValue, a.value)}
                     type="radio" name="schedule"/>
              <span
                className={compareDates(scheduleValue, a.value) ? " " : " text-primary " + " hm-text-left"}>{a.day}</span>
            </label>
          ))}
        </div>
      </div>
      {" "}
      {scheduleValue &&
      <div className="hm-m-auto">
        <label className="hm-schedule-title">Time of day</label>
        <div className="hm-w-100 hm-schedule-buttons-container">
          {timeDay.map((a, i) => (
            <label
              key={i}
              className={(scheduleTimeOfDayValue === a ?
                " hm-schedule-highlight-button" : " hm-schedule-normal-button") +
                " hm-d-flex hm-just-center hm-align-items-center"}
              htmlFor={i + "shTimeOfDay"}>
              <input required={required} id={i + "shTimeOfDay"} className="hm-invisible hm-position-absolute"
                     onChange={() => setScheduleTimeOfDayValue(a)}
                     checked={scheduleTimeOfDayValue === a}
                     type="radio" name="scheduleTime"/>
              <span className={scheduleTimeOfDayValue === a ? " " : " text-primary"}>{a}</span>
            </label>
          ))}
        </div>
      </div>}
      {" "}
      {scheduleTimeOfDayValue && <div className="hm-m-auto">
        <label className="hm-schedule-title">Pick a Timeframe</label>
        <div className="hm-w-100 hm-d-flex hm-just-center">
          {!isMobileOrPad() && <div className="hm-d-flex hm-just-center hm-align-items-center hm-content-item-time-frame">
            <span className="btn btn-link" onClick={() => goToElement(false)}>
              <span className="fa fa-chevron-left text-primary"/>
            </span>
          </div>}
          <div id={"scroll_detail"} className="css-carousel-times">
            {times.map((a, i) => (
              <div key={i}>
                <label className={(scheduleTimeValue.minutes === a.minutes && scheduleTimeValue.hour === a.hour ?
                         " hm-schedule-highlight-button-small" : " hm-schedule-normal-button-small") +
                         " hm-d-flex hm-just-center hm-align-items-center" +`${(i > 0 ? " hm-ml-1 " : "")}`}
                       htmlFor={i + "shTime"}>
                  <input required={required} id={i + "shTime"} className="hm-invisible hm-position-absolute"
                         onChange={() => setScheduleTimeValue(a)}
                         checked={scheduleTimeValue.minutes === a.minutes && scheduleTimeValue.hour === a.hour}
                         type="radio" name="scheduleTimeHours"/>
                  <span
                    className={scheduleTimeValue.minutes === a.minutes
                    && scheduleTimeValue.hour === a.hour ?
                      " " : " text-primary"}>{`${a.hour}:${a.minutes > 10 ? a.minutes : "0" + a.minutes}`}</span>
                </label>
              </div>
            ))}
          </div>
          {!isMobileOrPad() && <div className="hm-d-flex hm-just-center hm-align-items-center hm-content-item-time-frame">
            <span className="btn btn-link"
                  onClick={() => goToElement(true)}>
              <span className="fa fa-chevron-right text-primary"/>
            </span>
          </div>}
        </div>
      </div>}
    </div>
  );
};
