import React from 'react';
import SimpleModal from "../../../../../components/Modal";

export default function ModalLesson(props) {

    const handleSubmit = (event) => {
        props.handleClose();
        event.preventDefault();
        // Post da API
        // setLoading({ loading: false });
    }

    return (<SimpleModal {...props}>

    </SimpleModal>);
}
