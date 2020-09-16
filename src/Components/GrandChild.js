import React from 'react'
import GrandChildImage from '../Images/Aradhya_Bachchan.jpg'

export default function GrandChild(props) {
    return (
        <div className="col-6">
            <div className="card card-size text-center" >
                <div className="card-header h5">
                    Grand Child
                </div>
                <div className="card-body">
                    {
                        props.showGrandChildImage ?
                            <img id="grandChildImage" className="card-img mb-2" img src={GrandChildImage}></img>
                            : null
                    }
                    <button onClick={() => props.parentTextClick()} className="btn btn-secondary card-size mb-2" >{props.ParentText}</button>
                    <button onClick={() => props.childTextClick()} className="btn btn-secondary card-size mb-2" >{props.ChildText}</button>
                </div>
            </div>
        </div>
    )
}
