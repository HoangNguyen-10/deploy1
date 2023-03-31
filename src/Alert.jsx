import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alert(prop) {
    const { text } = prop
    return (
        <div class="alert alert-warning" role="alert">
            {text}
        </div>
    )
}
