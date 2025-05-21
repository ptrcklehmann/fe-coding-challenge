import Image from "next/image";

export const SomeImage: React.FC = () => {
  return (
    <div>
      <Image
        src="https://cs3.wettercomassets.com/images/interview/hafen.jpg"
        width={500}
        height={333}
        quality={75}
        priority={true}
        alt="Harbor scene"
        style={{
          objectFit: "contain",
          width: 500,
          maxWidth: "100%",
          height: "auto",
          aspectRatio: 1.5 / 1,
        }}
      />
      <div>
        Description:
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};
