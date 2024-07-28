import { Card, CardContent, CardHeader, List } from "@mui/material";

import CertificateListItem from "@portfolio/components/hoc/certificate/CertificateListItem";
import { useTranslation } from "react-i18next";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const CertificatesCard = () => {

    const { t } = useTranslation();
    const certificates = t("data.certificates", { returnObjects: true });

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

export default CertificatesCard;