import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const WorldMap = () => {
  return (
    <div className="worldmap-wrapper card">
      <div className="worldmap-header card-header">Top Engagement</div>
      <div className="card-body">
        <div className="world-map">
          <ComposableMap>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};
export default WorldMap;
