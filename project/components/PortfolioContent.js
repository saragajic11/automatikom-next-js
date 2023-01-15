const PortfolioContent = ({ item, index }) => {
    return <div id="portfolio-content-container" className={index % 2 === 0 ? "" : "row-reverse"}>
        <div className="title-container">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
        </div>
        <div className="image-container">
            <img src={item.imgSrc} />
        </div>
    </div>
}

export default PortfolioContent;