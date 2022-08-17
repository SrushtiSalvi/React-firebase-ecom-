import React from 'react';
import styled from '@emotion/styled';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

// interface RatingProps {
//   score: number;
// }
const ProductRating = ({ score }) => {
  const isHalf = score % 1;
  const ratingArray = Array(parseInt(score?.toString())).fill(1);
  if (isHalf === 0.5) {
    ratingArray.push(isHalf);
  }

  const RatingCon = styled.div`
    .star-icon {
      color: #ffa41c;
      font-size: 20px;
    }
  `;
  return (
    <RatingCon style={{ textAlign: 'right' }}>
      {ratingArray.map((rating, index) => {
        if (rating === 1) {
          return <StarIcon className="star-icon" key={index} />;
        } else {
          return <StarHalfIcon className="star-icon" key={index} />;
        }
      })}
    </RatingCon>
  );
};

export default ProductRating;
