document.addEventListener("DOMContentLoaded", function () {
    const batteryLevel = document.getElementById("battery-level");

    // Fungsi untuk mengubah tingkat baterai dan warnanya
    function updateBatteryLevel(level) {
        batteryLevel.style.width = level + "%";

        if (level < 20) {
            batteryLevel.style.backgroundColor = "red";
        } else {
            batteryLevel.style.backgroundColor = "green";
        }
    }

    // Simulasikan perubahan tingkat baterai
    let currentBatteryLevel = 0;
    setInterval(function () {
        if (currentBatteryLevel < 100) {
            currentBatteryLevel += 10;
        } else {
            currentBatteryLevel = 0;
        }
        updateBatteryLevel(currentBatteryLevel);
    }, 2000); // Ganti tingkat baterai setiap 2 detik
});
