import React from 'react'
import * as moment from 'moment';

const Time = (props) => {
    let time = moment.unix(props.time);
    if (moment().diff(moment(time), 'minutes') < 60) {
        time = 'لحظاتی پیش'
    } else if (moment().diff(moment(time), 'minutes') >= 60 && moment().diff(moment(time), 'minutes') < 1440) {
        time = Math.floor(moment().diff(moment(time), 'minutes') / 60) + ' ساعت پیش'
    } else if (moment().diff(moment(time), 'minutes') >= 1440 && moment().diff(moment(time), 'minutes') <= 43800 ) {
        time = Math.floor(moment().diff(moment(time), 'minutes') / 1440) + ' روز پیش'
    }
    else if(moment().diff(moment(time), 'minutes') > 43800){
        time = Math.floor(moment().diff(moment(time), 'minutes') / 43800) + ' ماه پیش'
    }
    return(
        <span>{time}</span>
    )
};

export default Time;