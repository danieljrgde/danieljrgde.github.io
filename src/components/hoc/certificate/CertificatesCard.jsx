import { Card, CardHeader, CardContent, List } from "@mui/material";
import { useTranslation } from "react-i18next";
import CertificateListItem from "@portfolio/components/hoc/certificate/CertificateListItem";

const styles = {
    cardHeader: {
        paddingBottom: 0,
    }
};

const CertificatesCard = () => {

    const { t } = useTranslation();
    const certificates = t("certificates.certificates", { returnObjects: true });

    return (
        <Card>
            <CardHeader
                sx={styles.cardHeader}
                title={t("CertificatesCard.title")}
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