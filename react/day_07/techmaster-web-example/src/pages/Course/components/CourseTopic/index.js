import React, { useContext, useState } from "react";
import Context from "context/Context";

function CourseTopic(props) {
    const { filter, onChangeTopic } = props
    const { topics } = useContext(Context);
    const [checked, setChecked] = useState();

    // Xử lý khi thay đổi topic
    const handleChangeTopic = (e) => {
        // Lấy giá trị topic đã chọn
        let topic = e.target.value;

        // Set lại state
        setChecked(topic)

        // Gửi giá trị vừa chọn => component cha (Course)
        onChangeTopic(topic)
    }

    return (
        <div className="col-md-3">
            <h2 className="fs-5 mb-4">Chủ đề</h2>
            <div className="topic-container">
                {topics.map((topic, index) => (
                    <div key={index} className="topic-item input-group d-flex align-items-center mb-1">
                        <input
                            type="radio"
                            value={topic.value}
                            id={topic.value}
                            onChange={(e) => handleChangeTopic(e)}
                            checked={topic.value === filter.topic}
                        />
                        <label htmlFor={topic.value} className="ms-2 fs-5">
                            {topic.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseTopic;