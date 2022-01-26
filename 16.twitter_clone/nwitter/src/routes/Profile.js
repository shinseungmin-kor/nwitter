import { authService } from "myBase";
import React from "react";
import { useHistory } from "react-router";

export default () => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/")
    }

    return (
        <>
          <button onClick={onLogOutClick}>Log out</button>
        </>
    )
}