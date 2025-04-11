import "./social-icons.scss"

function InstagramIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 107 107"
      className="my-custom-svgs"
      {...props}
    >
      <rect
        width={100}
        height={100}
        x={3.5}
        y={3.5}
        rx={5}
        ry={5}
        vectorEffect="non-scaling-stroke"

        style={{
          fill: "none",
          strokeMiterlimit: 10,
        }}
      />
      <circle
        cx={53.5}
        cy={53.5}
        vectorEffect="non-scaling-stroke"

        r={35.8}
        style={{
          fill: "none",
          strokeMiterlimit: 10,
        }}
      />
      <circle
        cx={87.82}
        cy={19.64}
        vectorEffect="non-scaling-stroke"
        r={5.91}
      />
    </svg>
  );
}

export default InstagramIcon;
