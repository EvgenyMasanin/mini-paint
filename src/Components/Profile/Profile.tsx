import React from "react";

const Profile: React.FC = props => {

    return (
        <div className="row m0">
            <div className="col s12 vh15" ><h3>My drawings</h3></div>
            <div className="col s12 vh63">
                {props.children}
            </div>
        </div>
    )
}

export default Profile
