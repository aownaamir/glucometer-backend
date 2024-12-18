const noble = require("noble");

noble.on("stateChange", (state) => {
  if (state === "poweredOn") {
    noble.startScanning([], false);
  } else {
    noble.stopScanning();
  }
});

noble.on("discover", (peripheral) => {
  console.log("Discovered peripheral:", peripheral.advertisement.localName);
  noble.stopScanning();

  peripheral.connect((error) => {
    if (error) {
      console.error("Connection error:", error);
      return;
    }

    console.log("Connected to", peripheral.advertisement.localName);
    peripheral.discoverServices([], (err, services) => {
      services.forEach((service) => {
        console.log("Discovered service:", service.uuid);
        service.discoverCharacteristics([], (err, characteristics) => {
          characteristics.forEach((char) => {
            console.log("Discovered characteristic:", char.uuid);
            char.on("data", (data) => {
              console.log("Received data:", data.toString());
            });
            char.subscribe();
          });
        });
      });
    });
  });
});
