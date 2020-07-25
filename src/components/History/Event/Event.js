import React from 'react';
import './Event.css';
import { convertDateFormat } from '../../../helpers/miscellenous';

const Event = (props) => {
    return (
        <div className="event">
            <div className="title">{props.details.title}</div>
            <div className="details">{props.details.details}</div>
            <div className="miscellaneous-info">
                <div className="event-date">{convertDateFormat(props.details.event_date_utc)}</div>
                <div className="social-links">
                    {
                        props.details.links.reddit &&
                        <a href={props.details.links.reddit} target='_blank' rel='noopener noreferrer'>
                            <img src={require('../../../images/reddit.png')} alt='Not' />
                        </a>
                    }
                    {
                        props.details.links.article &&
                        <a href={props.details.links.article} target='_blank' rel='noopener noreferrer'>
                            <img src={require('../../../images/article.svg')} alt='Not' />
                        </a>
                    }
                    {
                        props.details.links.wikipedia &&
                        <a href={props.details.links.wikipedia} target='_blank' rel='noopener noreferrer'>
                            <img src={require('../../../images/wikipedia.jpg')} alt='Not' />
                        </a>
                    }
                </div>
                {
                    props.details.flight_number &&
                    <div className="flight-number">{props.details.flight_number}</div>
                }
            </div>
        </div>
    );
};

export default Event;
