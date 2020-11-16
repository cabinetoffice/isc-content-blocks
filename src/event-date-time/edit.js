import { Component, Fragment } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { PanelBody } from '@wordpress/components';

import { withState } from '@wordpress/compose';

const {
    InspectorControls
} = wp.blockEditor;

import { DateTimePicker } from '@wordpress/components';
import { __experimentalGetSettings } from '@wordpress/date';


class CO_CPTEventDateTime extends Component {

    onChangeDateTime = ( newDateTime ) => {
        this.props.setAttributes( { date_time: newDateTime } );
    };

    render() {

        const {
            className,
            attributes,
        } = this.props;

        const {
            date_time
        } = attributes;

        const humanTime = new Date(date_time).toTimeString();
        const humanDate = new Date(date_time).toDateString();

        const MyDateTimePicker = withState( {
            date: new Date(),
        } )( ( { date, setState } ) => {
            const settings = __experimentalGetSettings();

            const is12HourTime = /a(?!\\)/i.test(
                settings.formats.time
                    .toLowerCase()
                    .replace( /\\\\/g, '' )
                    .split( '' ).reverse().join( '' )
            );

            return (
                <DateTimePicker
                    currentDate={ date_time ? date_time : date }
                    onChange={ ( date ) => {
                        //console.log(date);
                        setState( { date } );
                        this.onChangeDateTime( date );
                    }

                    }
                    is12Hour={ is12HourTime }
                />
            );
        } );

        return (
            <Fragment>
                <InspectorControls>
                    <div style={{ backgroundColor: "f9f5e1", margin: "0 -16px", padding: "0 16px 16px" }}>
                        <PanelBody
                            title={ __('Date & Time:', 'isc') }>

                            <MyDateTimePicker />

                        </PanelBody>
                    </div>

                </InspectorControls>

                <div>Date & Time: {date_time ? `${humanDate} at ${humanTime}` : 'Click to add a date and time on right hand side'}</div>
            </Fragment>
        )
    }
}

export default CO_CPTEventDateTime;


