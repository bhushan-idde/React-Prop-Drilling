import React from 'react'
import ChildImage from '../Images/Abhishek-Bachchan.jpg'
import GrandChild from './GrandChild'

export default function Child(props) {
    return (
        <div className="col-8">
            <div className="row">
                <div className="col-6">
                    <div className="card card-size text-center">
                        <div className="card-header h5">
                            Child
                        </div>
                        <div className="card-body">
                            {
                                props.showChildImage ?
                                    <img id="childImage" className="card-img mb-2" img src={ChildImage}></img>
                                    : null
                            }
                            <button onClick={() => props.parentTextClick()} className="btn btn-secondary card-size mb-2" >{props.ParentText}</button>
                            <button onClick={() => props.grandChildTextClick()} className="btn btn-secondary card-size mb-2" >{props.GrandChildText}</button>
                        </div>
                    </div>
                </div>
                <GrandChild
                    ParentText={props.ParentText}
                    ChildText={props.ChildText}
                    GrandChildText={props.GrandChildText}
                    showChildImage={props.showChildImage}
                    showParentImage={props.showParentImage}
                    showGrandChildImage={props.showGrandChildImage}
                    childTextClick={() => props.childTextClick()}
                    grandChildTextClick={() => props.grandChildTextClick()}
                    parentTextClick={() => props.parentTextClick()}
                >
                </GrandChild>
            </div>
        </div>
    )
}
