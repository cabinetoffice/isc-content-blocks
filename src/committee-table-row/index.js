import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

const {
    RichText
} = wp.blockEditor;

import { TextControl } from '@wordpress/components';

let table_icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.664 502.664">
  <path d="M0 22.186v458.293h502.664V22.186H0zm230.29 398.39H47.175v-89.842H230.29v89.842zm0-130.956H47.175v-89.885H230.29v89.885zm0-130.935H47.175V68.778H230.29v89.907zm225.242 261.891H272.396v-89.842h183.136v89.842zm0-130.956H272.396v-89.885h183.136v89.885zm0-130.935H272.396V68.778h183.136v89.907z" fill="#010002"/>
</svg>;

registerBlockType( 'co/committee-table-row', {

    title: __( 'Committee Table - Row', 'isc' ),

    description: __( 'Add the row data to the Committee table', 'isc' ),

    icon: {
        src: table_icon
    },

    category: 'layout',

    keywords: [
        __( 'spok', 'gov' )
    ],

    attributes: {
        title: {
            type: 'string',
            default: null
        },
        columnOneText: {
            type: 'string',
            default: null
        },
        columnTwoText: {
            type: 'string',
            default: null
        },
        columnThreeText: {
            type: 'string',
            default: null
        },
    },

    edit: ({attributes, setAttributes}) => {
        const { title, columnOneText, columnTwoText, columnThreeText } = attributes;

        const onChangeTitle = ( newTitle ) => {
            setAttributes({ title: newTitle});
        };

        const onChangeC1 = ( newColumnOneText ) => {
            setAttributes({ columnOneText: newColumnOneText});
        };

        const onChangeC2 = ( newColumnTwoText ) => {
            setAttributes({ columnTwoText: newColumnTwoText});
        };

        const onChangeC3 = ( newColumnThreeText ) => {
            setAttributes({ columnThreeText: newColumnThreeText});
        };

        return <div style={{ backgroundColor: "#f3f4f5", padding: "16px" }}>
            <h5 style={{ margin: "0 0 5px 0" }}>Committee Table - Row:</h5>

            <p style={{ margin: "5px 0 5px 0", fontSize: "0.8em" }}>To add another row press ctrl + shift + d</p>

            <h6 style={{ margin: "0 0 5px 0" }}>Title:</h6>

            <TextControl
                value={ title }
                onChange={ onChangeTitle }
                style={{margin: "0", maxWidth: "400px"}}
            />

            <h6 style={{ margin: "10px 0 5px 0" }}>Column One:</h6>

            <RichText
                tagName="p"
                style={{ margin: "0" }}
                onChange={ onChangeC1 }
                value={ columnOneText }
                placeholder={ 'Add a column one text here..' }
            />

            <h6 style={{ margin: "10px 0 5px 0" }}>Column Two:</h6>

            <RichText
                tagName="p"
                style={{ margin: "0" }}
                onChange={ onChangeC2 }
                value={ columnTwoText }
                placeholder={ 'Add a column two text here..' }
            />

            <h6 style={{ margin: "10px 0 5px 0" }}>Column Three:</h6>

            <RichText
                tagName="p"
                style={{ margin: "0" }}
                onChange={ onChangeC3 }
                value={ columnThreeText }
                placeholder={ 'Add a column three text here..' }
            />

        </div>;
    },
    save( { attributes } ) {

        const { title, columnOneText, columnTwoText, columnThreeText } = attributes;

        return <tr>
            <td>{ title }</td>
            <td>{ columnOneText }</td>
            <td>{ columnTwoText }</td>
            <td>{ columnThreeText }</td>
        </tr>
    }
} );