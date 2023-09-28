function YourScoreIcon({ color, value, position, left, className }) {
  return (
    <>
      <div
        className={className}
        style={{
          border: `0.1em solid ${color}`,
          position: position,
          left: left,
        }}
      >
        {value}
      </div>
    </>
  );
}

export default YourScoreIcon;

