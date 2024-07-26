import { Suspense, lazy } from "react";

import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";

const SVG = ({ variant, name, size, ...props }) => {
    const renderVector = (variant, name) => {
        try {
            const Vector = lazy(() => import(`../../assets/vectors/${variant}/${name}.svg?react`) );
            return (<Suspense><Vector /></Suspense>);
        }
        catch { return null }
    };
    return (
        <SvgIcon sx={{ height: size, width: size }} {...props}>
            {renderVector(variant, name)}
        </SvgIcon>
    );
};

SVG.propTypes = {
    variant: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
};

export default SVG;