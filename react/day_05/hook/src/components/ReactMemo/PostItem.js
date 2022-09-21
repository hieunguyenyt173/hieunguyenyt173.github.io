import React, {memo} from "react";
function PostItem() {
    console.log("render")
    return (
        <>
        <h1>PostItem</h1>
        </>
    )
}
export default memo(PostItem);