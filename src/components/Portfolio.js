import React from "react";
import { portfolioData } from "../data";
import { CardContainer, CardBody, CardItem } from "./Card3D";
import { cn } from "../utils/cn";
import PortfolioScroller from "./PortfolioScroller";
import "./Portfolio.css";

const Portfolio = React.forwardRef(({ openModal }, ref) => {
  return (
    <section className="section" id="portfolio" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>
            Click on any client to view their detailed portfolio and the results
            we achieved together.
          </p>
        </div>

        {/* SPEED CONTROL (Duration in Seconds):
           speed={30}  -> Fast
           speed={60}  -> Normal Slow
           speed={80}  -> Very Slow & Elegant (Recommended)
        */}
        <PortfolioScroller speed={80}>
          {portfolioData.map((client) => {
            const hasImage = !!client.image;

            const clientsUsingBackgroundCover = [
              "nior-cafe", "lumos-cafe", "jain-life", "doshi-design",
              "how-patio", "infinite-proptech", "girls-flavour", 
            ];

            const imageStyle = {};
            let containerBgColor = "white";

            if (clientsUsingBackgroundCover.includes(client.id) && hasImage) {
              imageStyle.backgroundImage = `url(${client.image})`;
              imageStyle.backgroundPosition = "center";
              imageStyle.backgroundRepeat = "no-repeat";
              imageStyle.backgroundSize = "cover";

              if (client.id === "girls-flavour") {
                 imageStyle.backgroundSize = "contain";
                 imageStyle.backgroundOrigin = "content-box"; 
                 imageStyle.padding = "10px"; 
              }

              if (client.id === "lumos-cafe") containerBgColor = "#f8c8dc";
              else if (client.id === "how-patio") containerBgColor = "#0f1a2e";
              else if (client.id === "infinite-proptech") containerBgColor = "#5227FF";
            }

            return (
              <CardContainer
                key={client.id}
                className="portfolio-card-wrapper"
                onClick={() => openModal(client.id)}
                // Fixed dimensions ensuring consistency
                style={{
                  width: "320px", 
                  height: "100%",
                  flexShrink: 0
                }}
              >
                <CardBody
                  className={cn(
                    "portfolio-card transition-all duration-300",
                    "hover:shadow-[0_0_20px_rgba(248,200,220,0.5)] cursor-pointer"
                  )}
                >
                  <CardItem
                    as="div"
                    translateZ={50}
                    className="w-full h-full flex flex-col rounded-lg overflow-hidden"
                  >
                    <div
                      className="portfolio-img flex items-center justify-center rounded-t-lg"
                      style={{
                        height: "200px",
                        backgroundColor: containerBgColor,
                        ...imageStyle,
                      }}
                    >
                      {hasImage && !imageStyle.backgroundImage ? (
                        <img
                          src={client.image}
                          alt={client.title}
                          className="h-full w-full object-contain p-4"
                        />
                      ) : null}
                    </div>

                    <div className="portfolio-content">
                      <CardItem
                        as="h3"
                        translateZ={20}
                        className="text-2xl font-bold mb-2 text-white"
                      >
                        {client.title}
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ={15}
                        className="text-gray-400 mb-4 text-sm"
                      >
                        {client.description}
                      </CardItem>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </PortfolioScroller>
      </div>
    </section>
  );
});

export default Portfolio;