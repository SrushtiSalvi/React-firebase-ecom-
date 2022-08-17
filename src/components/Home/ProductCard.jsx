import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ProductRating from '../shared/ProductRating';

const ProductCard = ({ product }) => {
  return (
    // <div style={{ display: 'flex', position: 'relative' }}>
    //   {products.map((product, index) => (
    //     <Box
    //       sx={{
    //         // width: '100rem',
    //         // maxWidth: 345,
    //         zIndex: 1,
    //         marginBottom: '0px',
    //         marginTop: '0px',
    //         position: 'relative',
    //       }}>
    //       <Grid
    //         container
    //         rowSpacing={1}
    //         columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //         <Grid item xs={6}>
    //           <Item>
    //             <Card key={product.id}>
    //               <CardActionArea>
    //                 <CardMedia
    //                   component="img"
    //                   height="140"
    //                   image={product.image_url}
    //                   alt="product_img"
    //                 />
    //                 <CardContent>
    //                   <Typography gutterBottom variant="h5" component="div">
    //                     {product.name}
    //                   </Typography>
    //                   <Typography variant="body2" color="text.secondary">
    //                     {product.discription}
    //                   </Typography>
    //                 </CardContent>
    //               </CardActionArea>
    //             </Card>
    //           </Item>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   ))}
    // </div>

    <div>
      <Card>
        <CardActionArea>
          <ProductRating score={product.rating} />
          <CardMedia
            component="img"
            height="280"
            image={product.image_url}
            alt="product_img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.discription}
            </Typography>
            <Typography variant="h4" fontSize="bold" color="#800000">
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
