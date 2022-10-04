import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate();
    const handleChangePage = () => {
        navigate("customers")
    }
    return (
        <>
            <h1>Dashboard</h1>
            <button className="btn btn-danger me-2" onClick={handleChangePage}> Go to Customers</button>
            <button className="btn btn-danger me-2" onClick={() => navigate(-1)}>Quay lai 1 page</button>
            <button className="btn btn-danger me-2" onClick={() => navigate(-2)}>Quay lai 2 page</button>
            <button className="btn btn-danger me-2" onClick={() => navigate(1)}>Đi tới 1 page</button>
            <button className="btn btn-danger me-2" onClick={() => navigate(2)}>Đi tới 2 page</button>
        </>
    )
}

export default Dashboard