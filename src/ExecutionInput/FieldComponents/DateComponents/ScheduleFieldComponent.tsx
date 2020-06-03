import * as React from "react";
import {useEffect, useState} from "react";
import {PropsField, TimeFormat} from "../../interfaces";
import {compareDates, getDaysOfWeek, getHoursSchedule, getSchedule, goToElement} from "../../Utils";


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
      <div className="col-lg-8 col-md-10 col-12 hm-m-auto">
        <label>Date</label>
        <div className="hm-w-100 hm-text-center">
          {days.map((a, i) => (
            <label
              key={i}
              className={(compareDates(scheduleValue, a.value) ?
                " btn-primary  hm-button-custom-2-active " : " btn-light btn hm-button-custom-2 ") +
              " btn hm-min-w-30 hm-mb-1 " + ` ${(i > 0 ? " hm-ml-1" : "")}`}
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
      <div className="col-lg-8 col-md-10 col-12 hm-ml-auto hm-mr-auto hm-mt-5">
        <label>Time of day</label>
        <div className="hm-w-100 hm-text-center">
          {timeDay.map((a, i) => (
            <label
              key={i}
              className={(scheduleTimeOfDayValue === a ?
                " btn-primary btn hm-button-custom-2-active " : " btn-light btn hm-button-custom-2") +
                " btn hm-min-w-30 " + ` ${(i > 0 ? "separate-items-schedule-hours" : "m-0")}`}
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
      {scheduleTimeOfDayValue && <div className="col-lg-8 col-md-10 col-12 hm-m-auto  hm-mt-5 ">
        <label>Pick a Timeframe</label>
        <div className="hm-d-flex hm-just-center">
          <div className="hm-d-flex hm-just-center hm-align-items-center hm-content-item-time-frame">
            <span className="btn btn-link" onClick={() => goToElement(false)}>
              <span className="fa fa-chevron-left text-primary"/>
            </span>
          </div>
          <div id={"scroll_detail"} className="css-carousel-times">

            {times.map((a, i) => (
              <div key={i}>
                <label className={(scheduleTimeValue.minutes === a.minutes && scheduleTimeValue.hour === a.hour ?
                         " btn-primary hm-view-button-custom-3-active " : " btn-light hm-view-button-custom-3 ") +
                         " btn btn-sm " + `${(i > 0 ? " hm-ml-1 " : "")}`}
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
          <div className="hm-d-flex hm-just-center hm-align-items-center hm-content-item-time-frame">
            <span className="btn btn-link"
                  onClick={() => goToElement(true)}>
              <span className="fa fa-chevron-right text-primary"/>
            </span>
          </div>
        </div>
      </div>}
    </div>
  );
};
