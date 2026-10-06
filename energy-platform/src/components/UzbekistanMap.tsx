import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { useLanguage } from "../LanguageContext";

function UzbekistanMap() {
  const { language } = useLanguage();

  const text =
    language === "uz"
      ? {
          title: "🗺️ O‘zbekiston energetika infratuzilmasi",
          type: "Turi",
          voltage: "Kuchlanish",
          capacity: "Quvvat",
          status: "Holat",
          health: "AI holat bahosi",
          highVoltageSubstation:
            "Yuqori kuchlanishli podstansiya",
          solarPowerPlant:
            "Quyosh elektr stansiyasi",
          hydropowerPlant:
            "Gidroelektr stansiyasi",
          gridSubstation:
            "Tarmoq podstansiyasi",
          powerGeneration:
            "Elektr energiyasi ishlab chiqarish",
          gasPowerPlant:
            "Gaz elektr stansiyasi",
          online: "Onlayn",
          active: "Faol",
          operating: "Ishlamoqda",
          highLoad: "Yuqori yuklama",
        }
      : language === "ru"
      ? {
          title: "🗺️ Энергетическая инфраструктура Узбекистана",
          type: "Тип",
          voltage: "Напряжение",
          capacity: "Мощность",
          status: "Статус",
          health: "Оценка состояния AI",
          highVoltageSubstation:
            "Высоковольтная подстанция",
          solarPowerPlant:
            "Солнечная электростанция",
          hydropowerPlant:
            "Гидроэлектростанция",
          gridSubstation:
            "Сетевая подстанция",
          powerGeneration:
            "Производство электроэнергии",
          gasPowerPlant:
            "Газовая электростанция",
          online: "Онлайн",
          active: "Активна",
          operating: "Работает",
          highLoad: "Высокая нагрузка",
        }
      : {
          title: "🗺️ Uzbekistan Energy Infrastructure",
          type: "Type",
          voltage: "Voltage",
          capacity: "Capacity",
          status: "Status",
          health: "AI Health Score",
          highVoltageSubstation:
            "High Voltage Substation",
          solarPowerPlant:
            "Solar Power Plant",
          hydropowerPlant:
            "Hydropower Plant",
          gridSubstation:
            "Grid Substation",
          powerGeneration:
            "Power Generation",
          gasPowerPlant:
            "Gas Power Plant",
          online: "Online",
          active: "Active",
          operating: "Operating",
          highLoad: "High Load",
        };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1500px",
        margin: "0 auto",
        background: "#101A2E",
        border: "1px solid #334155",
        borderRadius: "20px",
        padding: "30px 24px 24px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "30px",
          margin: "0 0 25px 0",
          fontWeight: "700",
          textShadow:
            "0 2px 8px rgba(0,0,0,0.8)",
        }}
      >
        {text.title}
      </h2>

      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #475569",
        }}
      >
        <MapContainer
          center={[41.2, 67.5]}
          zoom={6}
          scrollWheelZoom={true}
          style={{
            height: "600px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Tashkent */}
          <Marker position={[41.3111, 69.2797]}>
            <Popup>
              <strong>
                Tashkent Substation
              </strong>
              <br />
              {text.type}:{" "}
              {text.highVoltageSubstation}
              <br />
              {text.voltage}: 500 kV
              <br />
              {text.status}: 🟢 {text.online}
              <br />
              {text.health}: 96%
            </Popup>
          </Marker>

          {/* Navoi */}
          <Marker position={[40.1039, 65.3688]}>
            <Popup>
              <strong>
                Navoi Solar Plant
              </strong>
              <br />
              {text.type}:{" "}
              {text.solarPowerPlant}
              <br />
              {text.capacity}: 100 MW
              <br />
              {text.status}: 🟢 {text.active}
              <br />
              {text.health}: 94%
            </Popup>
          </Marker>

          {/* Charvak */}
          <Marker position={[41.615, 70.088]}>
            <Popup>
              <strong>
                Charvak Hydropower Plant
              </strong>
              <br />
              {text.type}:{" "}
              {text.hydropowerPlant}
              <br />
              {text.capacity}: 620 MW
              <br />
              {text.status}: 🟢 {text.operating}
              <br />
              {text.health}: 98%
            </Popup>
          </Marker>

          {/* Samarkand */}
          <Marker position={[39.6542, 66.9597]}>
            <Popup>
              <strong>
                Samarkand Grid Station
              </strong>
              <br />
              {text.type}:{" "}
              {text.gridSubstation}
              <br />
              {text.voltage}: 220 kV
              <br />
              {text.status}: 🟡 {text.highLoad}
              <br />
              {text.health}: 82%
            </Popup>
          </Marker>

          {/* Fergana */}
          <Marker position={[40.4897, 71.7246]}>
            <Popup>
              <strong>
                Fergana Power Station
              </strong>
              <br />
              {text.type}:{" "}
              {text.powerGeneration}
              <br />
              {text.capacity}: 150 MW
              <br />
              {text.status}: 🟢 {text.online}
              <br />
              {text.health}: 91%
            </Popup>
          </Marker>

          {/* Bukhara */}
          <Marker position={[39.7747, 64.4286]}>
            <Popup>
              <strong>
                Bukhara Energy Station
              </strong>
              <br />
              {text.type}:{" "}
              {text.gasPowerPlant}
              <br />
              {text.capacity}: 300 MW
              <br />
              {text.status}: 🟢 {text.online}
              <br />
              {text.health}: 89%
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default UzbekistanMap;