export const ArrowChart = (props) => {
  const scaleSize = props.maxValue - props.minValue;
  const scoreValue = props.score.toFixed(1);
  let bottomValue = ((scoreValue - props.minValue) / scaleSize) * 100;
  let scoreValuePosition = `${bottomValue}%`;

  let benchmarkBottomValue =
    ((props.benchmark - props.minValue) / scaleSize) * 100;
  let benchmarkBottomValueToPass = `${benchmarkBottomValue}%`;
  let midpoint = scaleSize / 2;
  let midpointProcent = `${midpoint}%`;

  let heightScaleScore = Math.abs(props.score);
  let heightScaleScorePercent = `${heightScaleScore}%`;
  let isTransform = props.score < 0 ? 'rotateX(180deg)' : 'none';
  let bottomPosition = props.score > 0 ? midpointProcent : null;
  let topPosition = props.score < 0 ? midpointProcent: null;

  return (
    <div className='scale-container'>
      <div className='title-feeling'>feeling</div>
      <div className='feeling-name' style={{ color: props.color }}>
        {props.topTextName}
      </div>
      <div className='feeling-description'>{props.topTextDescription}</div>
      <div className='scale-body'>
        <div className='midpoint'></div>
        <div
          className='result-score-line'
          style={{
            position: 'absolute',
            bottom: bottomPosition,
            top: topPosition,
            background: props.color,
            height: heightScaleScorePercent,
            transform: isTransform,
          }}
        ></div>
        <div
          className='result-score'
          style={{
            position: 'absolute',
            bottom: scoreValuePosition,
          }}
        >
          {scoreValue}
        </div>

        <div
          className='benchmarkcontainer'
          style={{ position: 'absolute', bottom: benchmarkBottomValueToPass }}
        >
          <div
            className='benchmark'
          ></div>{' '}
          <div
            className='benchmarkValue'
          >
            {props.benchmark}
          </div>
        </div>
      </div>
      <div className='title-feeling'>feeling</div>
      <div className='feeling-name' style={{ color: props.color }}>
        {props.bottomText}
      </div>
      <div className='feeling-description'>{props.bottomTextDescription}</div>
    </div>
  );
};
