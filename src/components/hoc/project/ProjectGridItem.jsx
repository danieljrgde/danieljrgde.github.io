import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProjectGridItem = () => {
    return (
        <Card>
            <CardMedia image="https://img.freepik.com/vecteurs-libre/ordinateur-portable-icone-isometrique-code-programme-developpement-logiciels-applications-programmation-neon-sombre_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719964800&semt=sph" />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectGridItem;