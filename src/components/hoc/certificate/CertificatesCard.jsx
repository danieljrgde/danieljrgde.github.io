import { Card, CardContent, CardHeader, List } from "@mui/material";

import CertificateListItem from "@portfolio/components/hoc/certificate/CertificateListItem";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const CertificatesCard = ({ certificates }) => {

    const { t } = useTranslation();

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("components.CertificatesCard.title")}
            />
            <CardContent>
                <List>
                    {certificates.map((certificate, idx) => <CertificateListItem key={idx} certificate={certificate}/>)}
                </List>
            </CardContent>
        </Card>
    );
};

CertificatesCard.propTypes = {
    certificates: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            intro: PropTypes.string.isRequired,
            bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
            technicalBulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
            institution: PropTypes.shape({
                name: PropTypes.string.isRequired,
                website: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    link: PropTypes.string.isRequired
                }).isRequired
            }).isRequired,
            dateCompletion: PropTypes.string.isRequired,
            certificate: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired,
            course: PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired
};

export default CertificatesCard;