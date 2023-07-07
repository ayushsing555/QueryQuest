import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading= ({loading})=>{
        return(
            <>
            <div className="flex justify-center p-5 mt-40 h-full">
                <RingLoader className='align-self-center' color="hsla(10, 62%, 30%, 0.99)"
                    size={150} loading={loading} aria-label="Loading Spinner"
                    data-testid="loader" 
                />
      </div>
            </>
        )
}

export default Loading;