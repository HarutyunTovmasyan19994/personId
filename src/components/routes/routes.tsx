import React from "react";
import {Routes, Route} from "react-router-dom";
import CreateId from "../create/createId";

const Routess = () => {
    return (
            <Routes>
                <Route path="create" element={<CreateId/>}/>
            </Routes>
    )
}

export default Routess
