import React from "react";

const Profile: React.FC = props => {

    return (
        <div className="row flexGrow m0">
            <div className="col s12" ><h3>My drawings</h3></div>
            <div className="col s12 overflowY" style={{ maxHeight: 480 }}>
                {props.children}
            </div>
        </div>
    )
}

export default Profile
