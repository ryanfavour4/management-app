import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { removeDeveloper } from "../services/store/features/DevelopersSlice";

const Developers = () => {
    const dispatch = useDispatch();
    const { developers } = useSelector(store => store.developers);

    const [filteredArray, setFilteredArray] = useState(developers);

    // ? PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const lastRowsIndex = currentPage * rowsPerPage;
    const firstRowsIndex = lastRowsIndex - rowsPerPage;
    const currentPackageInView = filteredArray.slice(firstRowsIndex, lastRowsIndex);

    return <div>
        <h1>Developers</h1>
        {currentPackageInView.map((devs) => {
            return (
                <div key={devs.id} className="dev_box">
                    <h3>{devs.name}</h3>
                    <h5>{devs.company}</h5>
                    <p>{devs.email}</p>
                    <p>{devs.gender}</p>
                    <p onClick={dispatch(removeDeveloper(devs.id))}>delete</p>
                </div>
            )
        })}
        <Pagination
            rowsPerPage={rowsPerPage}
            totalPostLength={filteredArray.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage} />
    </div>;
};

export default Developers;
