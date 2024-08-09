import { Suspense, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";

const Vector = ({ variant, name, size, ...props }) => {
    
    const [VectorComponent, setVectorComponent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadVector = async () => {
            try {
                const module = await import(`../../assets/vectors/${variant}/${name}.svg?react`);
                setVectorComponent(() => module.default);
            } catch (err) {
                console.error(`Failed to load vector: ${variant}/${name}`, err);
                setError(err);
            }
        };

        loadVector();
    }, [variant, name]);

    if (error) {
        return null;
    }

    return (
        <SvgIcon sx={{ height: size, width: size }} {...props}>
            {VectorComponent && (
                <Suspense fallback={<div>Loading...</div>}>
                    <VectorComponent />
                </Suspense>
            )}
        </SvgIcon>
    );
};

Vector.propTypes = {
    variant: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Vector;