import { registerBlockType } from '@wordpress/blocks';

import { TextControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

let table_icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.664 502.664">
  <path d="M0 22.186v458.293h502.664V22.186H0zm230.29 398.39H47.175v-89.842H230.29v89.842zm0-130.956H47.175v-89.885H230.29v89.885zm0-130.935H47.175V68.778H230.29v89.907zm225.242 261.891H272.396v-89.842h183.136v89.842zm0-130.956H272.396v-89.885h183.136v89.885zm0-130.935H272.396V68.778h183.136v89.907z" fill="#010002"/>
</svg>;

registerBlockType( 'co/committee-table-columns', {

    title: __( 'Committee Table - Columns', 'isc' ),

    description: __( 'Add the coloumn titles to the Committee table', 'isc' ),
    icon: {
        src: table_icon
    },

    category: 'layout',

    keywords: [
        __( 'spok', 'gov' )
    ],

    attributes: {
        columnOne: {
            type: 'string',
            default: null
        },
        columnTwo: {
            type: 'string',
            default: null
        },
        columnThree: {
            type: 'string',
            default: null
        }
    },

    edit: ({attributes, setAttributes}) => {
        const { columnOne, columnTwo, columnThree } = attributes;

        const onChangeOne = ( newColumnOne ) => {
            setAttributes({ columnOne: newColumnOne });
        };

        const onChangeTwo = ( newColumnTwo ) => {
            setAttributes({ columnTwo: newColumnTwo });
        };

        const onChangeThree = ( newColumnThree ) => {
            setAttributes({ columnThree: newColumnThree });
        };

        return <div style={{ backgroundColor: "#f3f4f5", padding: "16px" }}>

            <h5 style={{ margin: "0 0 5px 0" }}>Committee Table - Columns:</h5>

            <h6 style={{ margin: "15px 0 5px 0" }}>Column One:</h6>
            <label style={{ fontSize: "0.8rem", fontFamily: "sans-serif" }}>Add a title for Column One:</label>
            <TextControl
                value={ columnOne }
                onChange={ onChangeOne }
                style={{margin: "0", maxWidth: "400px"}}
            />
        
            <h6 style={{ margin: "15px 0 5px 0" }}>Column Two:</h6>
            <label style={{ fontSize: "0.8rem", fontFamily: "sans-serif" }}>Add a title for Column Two:</label>
            <TextControl
                value={ columnTwo }
                onChange={ onChangeTwo }
                style={{margin: "0", maxWidth: "400px"}}
            />
            
            <h6 style={{ margin: "15px 0 5px 0" }}>Column Three:</h6>
            <label style={{ fontSize: "0.8rem", fontFamily: "sans-serif" }}>Add a title for Column Three:</label>
            <TextControl
                value={ columnThree }
                onChange={ onChangeThree }
                style={{margin: "0", maxWidth: "400px"}}
            />

        </div>;
    },

    save( { attributes } ) {

        const { columnOne, columnTwo, columnThree } = attributes;

        return <div>
            <h6>Column One</h6>
            <ul>
                <li>Title: { columnOne }</li>
            </ul>
            <h6>Column Two</h6>
            <ul>
                <li>Title: { columnTwo }</li>
            </ul>
            <h6>Column Three</h6>
            <ul>
                <li>Title: { columnThree }</li>
            </ul>
        </div>
    }
} );