import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlinedIcon />
      </div>
      {newsArticle("Steve Smith is back", "Top News - 3k readers")}
      {newsArticle("IPL returns", "Top News - 1M readers")}
      {newsArticle("Tokyo Olympics 2021", "Top News - 10M readers")}
      {newsArticle("ICC T20I WC 2021", "Top News - 50k readers")}
      {newsArticle("Bezzos goes Space", "Top News - 10M readers")}
      {newsArticle("Cognizant is hiring", "Top News - 306 readers")}
    </div>
  );
};

export default Widgets;
