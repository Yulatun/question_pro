import YourScoreIcon from './YourScoreIcon';
export const ArrowChartMobile = (props) => {
  
  const scaleSize = props.maxValue - props.minValue;
  const scoreValue = props.score.toFixed(1);
  let scoreValuePosition = Math.floor(scoreValue) + 50;
  scoreValuePosition =
    scoreValuePosition > 100
      ? 100
      : scoreValuePosition < 0
      ? 0
      : scoreValuePosition;
  const scoreValuePositionPerCent = `${scoreValuePosition}%`;

  const benchmarkBottomValue =
    ((props.benchmark - props.minValue) / scaleSize) * 100;
  const benchmarkBottomValueToPass = `${benchmarkBottomValue}%`;

  return (
    <div className='scale-container-mb'>
      <div className='feeling-mb'>
        <div className='title-feeling-mb'>
          feeling
          <span className='feeling-name-mb' style={{ color: props.color }}>
            {props.bottomText}
          </span>
        </div>
        <div className='feeling-description-mb'>
          {props.bottomTextDescription}{' '}
        </div>
      </div>
      <div className='scale-body-mb'>
        <div className='midpoint-mb'></div>
        <YourScoreIcon
          value={scoreValue}
          color={props.color}
          position='absolute'
          left={scoreValuePositionPerCent}
          className='circle-your-score-icon-mb'
        ></YourScoreIcon>
        <div
          className='benchmarkcontainer-mb'
          style={{ position: 'absolute', left: benchmarkBottomValueToPass }}
        >
          <div className='benchmarkValue-mb'>{props.benchmark}</div>
          <div className='benchmark-mb'></div>{' '}
        </div>
      </div>
      <div className='feeling-mb'>
        <div className='title-feeling-mb'>
          feeling
          <span className='feeling-name-mb' style={{ color: props.color }}>
            {props.topTextName}{' '}
          </span>
        </div>
        <div className='feeling-description-mb'>{props.topTextDescription}</div>
      </div>
    </div>
  );
};
