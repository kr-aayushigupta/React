// Avatar component to display their profile picture

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <img
    className="rounded-full w-24 h-24 object-cover border"
    src={src}
    alt={alt}
  />
);

export default Avatar;
