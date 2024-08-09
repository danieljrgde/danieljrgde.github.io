import { Suspense, forwardRef, lazy, useEffect, useState } from "react";

import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import PropTypes from "prop-types";

const Icon = forwardRef(({ name, ...props }, ref) => {

    const [IconComponent, setIconComponent] = useState(BrokenImageIcon);

    useEffect(() => {
        switch (name) {
            case "Language":
                setIconComponent(lazy(() => import("@mui/icons-material/Language"))); break;
            case "LinkedIn":
                setIconComponent(lazy(() => import("@mui/icons-material/LinkedIn"))); break;
            case "GitHub":
                setIconComponent(lazy(() => import("@mui/icons-material/GitHub"))); break;
            case "Description":
                setIconComponent(lazy(() => import("@mui/icons-material/Description"))); break;
            case "School":
                setIconComponent(lazy(() => import("@mui/icons-material/School"))); break;
            case "Place":
                setIconComponent(lazy(() => import("@mui/icons-material/Place"))); break;
            case "DateRange":
                setIconComponent(lazy(() => import("@mui/icons-material/DateRange"))); break;
            default:
                break;
        }
    }, [name]);
    
    return (
        <Suspense fallback={null}>
            <IconComponent ref={ref} {...props} />
        </Suspense>
    );
});

Icon.displayName = "Icon";

Icon.propTypes = {
    name: PropTypes.string
};

export default Icon;
