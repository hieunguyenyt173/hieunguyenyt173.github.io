import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import Context from 'context/Context'
import { addProduct } from 'store/actions';
import { formatMoney } from 'utils/utils';

function CourseDetail() {
    // Lấy id trên URL
    const { courseId } = useParams();

    // Lấy ds khóa học, user từ trong context
    const { courses, users, products, dispatchCart } = useContext(Context);

    // Lấy thông tin khóa học
    const course = courses.find(course => course.id === +courseId);

    // Lấy thông tin tư vấn viên
    const supporter = users.find(user => user.id === course.supporterId);

    // Xử lý thêm sản phẩm vào giỏ hàng
    const handleAddProduct = () => {
        // Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
        const isExist = products.some(product => product.id === +courseId);
        if (isExist) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        }

        // Thêm sản phẩm vào giỏ
        const newCartItem = {
            id: course.id,
            title: course.title,
            image: course.image,
            price: course.price,
            count: 1
        }

        dispatchCart(addProduct(newCartItem));
        alert("Thêm sản phẩm vào giỏ hàng thành công");
    }

    return (
        <div className="course-container my-5">
            <div className="container">
                <div className="mb-4">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to='/khoa-hoc'>Khóa học</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {course.title}
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="main p-4 shadow-sm">
                            <h2 className="course-title fs-5">
                                {course.title}
                            </h2>

                            <hr />

                            <div className="supporter d-flex align-items-center">
                                <div className="supporter-image">
                                    <img src={supporter.avatar}
                                        alt="tư vấn viên" className="rounded-circle" />
                                </div>
                                <div className="ms-4 supporter-info">
                                    <p>
                                        <b>Tư vấn viên :</b>
                                        {supporter.name}
                                    </p>
                                    <p>
                                        <b>Email :</b>
                                        {supporter.email}
                                    </p>
                                    <p className="mb-0">
                                        <b>Số điện thoại :</b>
                                        {supporter.phone}
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <h2 className="course-title fs-5">
                                Thông tin khóa học
                            </h2>

                            <div className="course-description">
                                <p>
                                    {course.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 shadow-sm">
                            <div className="course-image mb-4">
                                <img src={course.image} alt={course.title} />
                            </div>
                            <p>
                                Học phí :
                                <span className="fw-bold course-price">{formatMoney(course.price)}</span>
                            </p>
                            <p>
                                Hình thức học :
                                <span className="fw-bold course-type">{course.type}</span>
                            </p>
                            <button className="btn btn-success" onClick={handleAddProduct}>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail