import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { removeDeveloper } from "../services/store/features/DevelopersSlice";

const Developers = () => {
    const dispatch = useDispatch();
    const { developers } = useSelector(store => store.developers);


    // ? PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const lastRowsIndex = currentPage * 10;
    const firstRowsIndex = lastRowsIndex - 10;
    const currentPackageInView = developers.slice(firstRowsIndex, lastRowsIndex);

    return <div>
        <h1>Developers</h1>
        {currentPackageInView.map((devs) => {
            return (
                <div key={devs.id} className="dev_box">
                    <h3>{devs.name}</h3>
                    <h5>{devs.company}</h5>
                    <p>{devs.email}</p>
                    <p>{devs.gender}</p>
                    <p onClick={() => dispatch(removeDeveloper(devs.id))}>delete</p>
                </div>
            )
        })}
        <Pagination
            rowsPerPage={10}
            totalPostLength={developers.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage} />
    </div>;
};

export default Developers;
