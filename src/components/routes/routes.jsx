import React from "react";
import {Routes, Route} from "react-router-dom";
import CreateId from "../create/createId";
import PersonId from "../personId/personId";

const Routess = () => {
    return (
            <Routes>
                <Route path="create" element={<CreateId/>}/>
                <Route path ="personId" element={<PersonId/>}/>
            </Routes>
    )
}

export default Routess
