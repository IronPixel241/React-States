import { useState } from "react";

function LikeButton() {

    let [isLiked , setIsLiked] = useState(false);

    let toggleLike = () => {
        // console.log("Toggled Like button");
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i class="fa-solid fa-heart fa-beat"></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    );
}

export default LikeButton;