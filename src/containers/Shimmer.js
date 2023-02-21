import { Image, Shimmer } from 'react-shimmer';

const ShimmerCard = () => {
  return (
    <div className='flex flex-wrap'>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="product-card flex-[0_0_25%] max-w-[calc(25%-2rem)] p-4  mb-12 mx-4" data-testid="shimmer" key={index}>
            <Shimmer width={300} height={400} />
          </div>
        ))}
    </div>
  );
};

export default ShimmerCard;