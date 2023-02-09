const PortfolioContent = ({ item, index }) => {
    return <div id="portfolio-content-container" className={index % 2 === 0 ? "" : "row-reverse"}>
        <div className="title-container">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
        </div>
        <div className="image-container">
            <img src={item.imgSrc} className={item.imgSrc.includes("prj-8") || item.imgSrc.includes("prj-7") || item.imgSrc.includes("prj-6") ? "shorter" : ""} />
        </div>
    </div>
}

export default PortfolioContent;