import React from 'react'

export default function Alert(probs) {
    return (
        <>
            <div style={{height:"50px"}}>
         { probs.alert &&  <div className={`alert alert-${probs.alert.type}  alert-dismissible fade show`} role="alert">
                <strong>{probs.alert.type}</strong> {probs.alert.msg}
                </div>}
        </div>
    </>
    )
}
