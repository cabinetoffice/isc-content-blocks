import edit from './edit';

import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

const {
    RichText
} = wp.blockEditor;

let event_icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425 425">
  <path d="M293.333 45V20h-30v25H161.667V20h-30v25H0v360h425V45H293.333zM131.667 75v25h30V75h101.667v20h30V75H395v50H30V75h101.667zM30 375V155h365v220H30z"/>
  <path d="M97.5 285h50v50h-50zM187.5 285h50v50h-50zM277.5 285h50v50h-50zM187.5 195h50v50h-50zM277.5 195h50v50h-50zM97.5 195h50v50h-50z"/>
</svg>

registerBlockType( 'co/event-date-time', {

    title: __( 'Date & Time Picker', 'isc' ),

    description: __( 'Select a data and time', 'isc' ),

    icon: {
        src: event_icon
    },

    category: 'layout',

    keywords: [
        __( 'spok', 'gov' )
    ],

    attributes: {
        date_time: { 
            type: 'string',
            default: null
        }
    },

    edit:edit,

    save( { attributes } ) {

        const { date_time } = attributes;

        const saved_date = new Date(date_time);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        const formatted_date = saved_date.toLocaleDateString('en-GB', options);

        return <p>{ formatted_date }</p>
    }

} );
