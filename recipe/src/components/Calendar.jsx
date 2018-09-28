import React, { Component } from "react";
import Navbar from "./Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "./Calendar.css";
import Modal from "./Modal";
import ModalRemove from "./ModalRemove";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const dummyEvents = [
  {
    allDay: false,
    endDate: new Date("December 10, 2017 11:13:00"),
    startDate: new Date("December 09, 2017 11:13:00"),
    title: "hi"
  },
  {
    allDay: true,
    endDate: new Date("December 09, 2017 11:13:00"),
    startDate: new Date("December 09, 2017 11:13:00"),
    title: "All Day Event"
  },
  {
    allDay: false,
    endDate: new Date("September 18, 2018 11:13:00"),
    startDate: new Date("September 18, 2018 09:13:00"),
    title: "Chick-fil-A for breakfast"
  }
];

class Calendar extends Component {
  state = {
    events: dummyEvents,
    show: false,
    start: "",
    end: "",
    title: "",
    showModalRemove: false
  };

  showModal = ({ start, end }) => {
    this.setState({ show: true, start: start, end: end });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleSubmit = input => {
    let events = this.state.events.slice();
    events.push({
      allDay: false,
      endDate: this.state.end,
      startDate: this.state.start,
      title: input
    });
    this.setState({
      events: events,
      start: "",
      end: ""
    });
  };

  showModalRemove = event => {
    //Do i need brackets around this event parameter?
    this.setState({
      showModalRemove: true,
      start: event.start,
      end: event.end,
      title: event.title
    });
  };

  hideModalRemove = () => {
    this.setState({ showModalRemove: false });
  };

  removeTitle = title => {
    this.setState({
      events: this.state.events.filter((event, index) => event.title !== title),
      start: "",
      end: "",
      title: ""
    });
  };

  componentDidMount = () => {
    const json6 = localStorage.getItem("calendar");
    const calendar = JSON.parse(json6);
    for (let i = 0; i < calendar.length; i++) {
      calendar[i].startDate = new Date(calendar[i].startDate);
      calendar[i].endDate = new Date(calendar[i].endDate);
    }

    this.setState({ events: calendar });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const calendar = JSON.stringify(this.state.events);
    localStorage.setItem("calendar", calendar);
    console.log(calendar);
  };

  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{ float: "left" }}>
            Recipe Planner
          </h1>
          <Navbar />
        </header>
        <div className="container">
          <BigCalendar
            selectable
            events={this.state.events}
            startAccessor="startDate"
            endAccessor="endDate"
            /* onSelectEvent={event => alert(event.title)} */
            /* onSelectSlot={(slotInfo) => alert(
          `selected slot: \n\nstart: ${slotInfo.start.toLocaleString()} ` +
          `\nend: ${slotInfo.end.toLocaleString()}`
        )}  */
            onSelectEvent={this.showModalRemove}
            onSelectSlot={this.showModal}
            defaultView="week"
            defaultDate={new Date()}
          />
        </div>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          onSubmit={this.handleSubmit}
        />
        <ModalRemove
          show={this.state.showModalRemove}
          handleClose={this.hideModalRemove}
          removeTitle={this.removeTitle}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default Calendar;

//Use filter method to get rid of an event
//Rename the event as well

/* Information about the calendar

https://intljusticemission.github.io/react-big-calendar/examples/index.html 

Github -> 
https://github.com/intljusticemission/react-big-calendar

https://stackoverflow.com/questions/39578533/create-events-in-react-big-calendar

https://stackoverflow.com/questions/47710223/basic-setup-of-react-big-calendar-events-not-showing

http://codegist.net/code/big-calendar-react/

https://github.com/intljusticemission/react-big-calendar/issues/401

https://github.com/arecvlohe/rbc-starter/blob/master/src/App.js

https://stackoverflow.com/questions/47305518/how-can-i-create-a-new-event-in-big-calendar-react-selecting-a-date-time-range

https://www.snip2code.com/Snippet/763286/React-Big-Calendar-(https---github-com-j

https://github.com/intljusticemission/react-big-calendar/issues/623

https://github.com/intljusticemission/react-big-calendar/issues/726

https://www.google.com/search?q=storing+new+date()+in+local+storage+reactjs&oq=storing+new+date()+in+local+storage+reactjs&aqs=chrome..69i57.17368j0j7&sourceid=chrome&ie=UTF-8

https://stackoverflow.com/questions/12661293/save-and-load-date-localstorage
*/
