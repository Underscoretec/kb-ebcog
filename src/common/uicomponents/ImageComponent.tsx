import Image from "next/image";

const ImageComponent: React.FC<{
    src: any;
    alt: string;
    width?: any;
    height?: any;
    className?: any;
    onClick?: any;
  }> = ({ src, alt, width, height, className ,onClick}) => {
    return (
      <div className=" ">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onClick={onClick}
        />
      </div>
    );
  };
   
  export default ImageComponent;