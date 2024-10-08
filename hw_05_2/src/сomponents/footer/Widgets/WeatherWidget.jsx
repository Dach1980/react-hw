import './Widgets.css';
import Title from '../Widgets/Title/Title'
export default function WeatherWidget(props) {
  const {
    title,
    averageTemperature,
    morningTemperature,
    daytimeTemperature,
  } = props;

  return (
    <div className="Weather-widget">
      <Title title={title} />
      <div className="Weather-widget-degrees">
        <span className="Weather-widget-degrees__average">
          {averageTemperature}&deg;
        </span>
        <div className="Weather-widget-degrees__in-detail">
          <span className="Weather-widget-degrees__in-detail-morning">
            Утром {morningTemperature},
          </span>
          <span className="Weather-widget-degrees__in-detail-afternoon">
            днём {daytimeTemperature}
          </span>
        </div>
      </div>
    </div>
  );
}
