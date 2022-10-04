import React, { useContext, useEffect, useState } from "react";
import CourseTopic from "./components/CourseTopic";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import Context from "context/Context";
import "./Course.css";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

function Course() {
    const location = useLocation();
    const navigate = useNavigate();

    const { courses } = useContext(Context);

    const [filter, setFilter] = useState(() => {
        const params = queryString.parse(location.search);

        return {
            term: params.term || "",
            topic: params.topic || ""
        }
    });

    // Khi query string thay đổi => Set lại filter => Lọc lại course => Render lại
    useEffect(() => {
        const params = queryString.parse(location.search);

        setFilter({
            term: params.term || "",
            topic: params.topic || ""
        })

    }, [location.search])

    // Thay đổi tìm kiếm tiêu đề
    const handleSearchTerm = (term) => {
        // setFilter({ ...filter, term });
        const queryParams = { ...filter, term };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams, {
                skipEmptyString: true
            })
        })

    };

    // Thay đổi chủ đề
    const handleChangeTopic = (topic) => {
        // setFilter({ ...filter, topic });
        const queryParams = { ...filter, topic };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams, {
                skipEmptyString: true
            })
        })
    };

    // Lọc khóa học theo filter
    const filterCourse = () => {
        let newCourses = [...courses];

        if (filter.term) {
            newCourses = newCourses.filter((course) =>
                course.title.toLowerCase().includes(filter.term.toLowerCase())
            );
        }

        if (filter.topic) {
            newCourses = newCourses.filter((course) =>
                course.topics.includes(filter.topic)
            );
        }

        return newCourses;
    };

    const renderedCourses = filterCourse();

    return (
        <div className="course-container py-5">
            <div className="container">
                <div className="row">
                    <CourseTopic onChangeTopic={handleChangeTopic} filter={filter} />

                    <div className="col-md-9">
                        <CourseSearch onSearchTerm={handleSearchTerm} />
                        <CourseList courses={renderedCourses} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;