import { Button } from "@mui/material";
import { useState } from "react";

function LoadMoreButton({setLimit}) {


    const handleLoadMore = () => {
        setLimit(prev => prev + prev);
    }

    return (
        <div>
        <Button onClick={handleLoadMore} style={{ backgroundColor: "#7848f4", color: "#FFFFFF" }}>
          Daha çox
        </Button>
        </div>
    );
}

export default LoadMoreButton;