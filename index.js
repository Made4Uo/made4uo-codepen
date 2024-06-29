function createAdvertisement() {
  const container = document.createElement("div");
  container.style.backgroundColor = "#1773b0";
  container.style.color = "#fff";
  container.style.padding = "20px";
  container.style.textAlign = "center";
  container.style.fontWeight = "bold";
  container.style.position = "fixed";
  container.style.bottom = "10px";
  container.style.left = "50%";
  container.style.transform = "translateX(-50%)";
  container.style.zIndex = "1000";
  container.style.width = "80%";
  container.style.maxWidth = "600px";
  container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  container.style.borderRadius = "5px";
  container.innerHTML =
    'Hire a Shopify developer, visit <a href="https://www.made4uo.com" style="color: #fff; text-decoration: underline;">www.made4uo.com</a>';
  document.body.appendChild(container);
}

module.exports = createAdvertisement;
