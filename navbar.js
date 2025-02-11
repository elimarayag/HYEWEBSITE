document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar">
            <div class="logo">
                <a href="index.html">
                    <img src="logo.png" alt="Logo">
                </a>
            </div>
            <ul class="nav-links">
                <!-- Home Dropdown -->
                <li class="dropdown">
                    <a href="index.html">Home ▼</a>
                    <div class="dropdown-content">
                        <a href="about.html">About Us</a>
                        <a href="partners.html">Partners</a>
                        <a href="dealer-form.html">Dealer Form</a>
                    </div>
                </li>

                <!-- Products Dropdown -->
                <li class="dropdown">
                    <a href="#">Products ▼</a>
                    <div class="dropdown-content">
                        <div class="nested-dropdown">
                            <a href="#">HIKVISION ▶</a>
                            <div class="sub-dropdown">
                                <a href="turbo-hd-tvi-720p.html">TURBO HD TVI 720P</a>
                                <a href="turbo-hd-tvi-1080p.html">TURBO HD TVI 1080P</a>
                                <a href="colorvu.html">COLORVU</a>
                                <a href="hd1080p-audio-series.html">HD1080P AUDIO SERIES</a>
                                <a href="iot-pir-series.html">IOT/PIR SERIES</a>
                                <a href="ptz-speed-dome.html">PTZ SPEED DOME</a>
                                <a href="acusense-dvr.html">ACUSENSE DVR</a>
                                <a href="turbo-hd-dvr.html">TURBO HD DVR</a>
                                <a href="hikvision-kit.html">HIKVISION KIT</a>
                                <a href="hik-access-control.html">HIK ACCESS CONTROL</a>
                            </div>
                        </div>
                        <!-- AVTECH -->
                        <div class="nested-dropdown">
                            <a href="#">AVTECH ▶</a>
                            <div class="sub-dropdown">
                                <a href="tvi-dome-camera.html">TVI DOME CAMERA</a>
                                <a href="tvi-bullet-camera.html">TVI BULLET CAMERA</a>
                                <a href="tvi-dvr-recorder.html">TVI DVR RECORDER</a>
                                <a href="tvi-ptz-camera.html">TVI PTZ CAMERA</a>
                            </div>
                        </div>
                        <!-- DAHUA -->
                        <div class="nested-dropdown">
                            <a href="#">DAHUA ▶</a>
                            <div class="sub-dropdown">
                                <a href="dome-camera.html">DOME CAMERA</a>
                                <a href="bullet-camera.html">BULLET CAMERA</a>
                                <a href="ptz-camera.html">PTZ CAMERA</a>
                                <a href="nvr-recorder.html">NVR RECORDER</a>
                                <a href="xvr-recorder.html">XVR RECORDER</a>
                                <a href="networks.html">NETWORKS</a>
                                <a href="pinhole-wireless.html">PINHOLE | WIRELESS</a>
                            </div>
                        </div>
                        <!-- RUIJIE | NETWORKS -->
                        <div class="nested-dropdown">
                            <a href="#">RUIJIE | NETWORKS ▶</a>
                            <div class="sub-dropdown">
                                <a href="reyee.html">REYEE</a>
                                <a href="ruijie.html">RUIJIE</a>
                                <a href="ruijie-kit.html">RUIJIE KIT</a>
                                <a href="ruijie-management.html">RUIJIE MANAGEMENT</a>
                                <a href="ruijie-accessories.html">RUIJIE ACCESSORIES</a>
                                <div class="nested-dropdown">
                            <a href="#">ZKTECO ▶</a>
                            <div class="sub-dropdown">
                                <a href="biometrics-access-control.html">BIOMETRICS & ACCESS CONTROL</a>
                            </div>
                            </div>
                            </div>
                        </div>
                        <!-- ROSSLARE -->
                        <div class="nested-dropdown">
                            <a href="#">ROSSLARE ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">ACCESS CONTROL SYSTEM</a>
                            </div>
                        </div>
                        <!-- ITC AUDIO -->
                        <div class="nested-dropdown">
                            <a href="#">ITC AUDIO ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">ITC COMMERCIAL AUDIO</a>
                            </div>
                        </div>
                        <!-- HONEYWELL -->
                        <div class="nested-dropdown">
                            <a href="#">HONEYWELL ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">EVACLITE</a>
                                <a href="#">COMPACT PA</a>
                                <a href="#">LOUD SPEAKER</a>
                                <a href="#">FIRELITE - UL LISTED PANEL</a>
                                <a href="#">MORLEY DXC - ADDRESSABLE</a>
                                <a href="#">MORLEY LITE - ADDRESSABLE</a>
                                <a href="#">MORLEY UL - ADDRESSABLE</a>
                            </div>
                        </div>
                        <!-- iHORN -->
                        <div class="nested-dropdown">
                            <a href="#">iHORN ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">STANDALONE SMOKE DETECTOR</a>
                                <a href="#">WIRED SMOKE | HEAT DETECTOR</a>
                                <a href="#">BEAM DETECTOR | INFRARED HENCE</a>
                                <a href="#">WIRED | WIRELESS GLASS DETECTOR</a>
                                <a href="#">WIRELESS DETECTORS</a>
                                <a href="#">WIRED PIR</a>
                            </div>
                        </div>
                        <!-- UBIQUITI -->
                        <div class="nested-dropdown">
                            <a href="#">UBIQUITI ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">Wireless Ubiquiti</a>
                            </div>
                        </div>
                        <!-- EZVIZ NETWORK -->
                        <div class="nested-dropdown">
                            <a href="#">EZVIZ NETWORK ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">EZVIZ</a>
                            </div>
                        </div>
                        <!-- GUARD PATROL -->
                        <div class="nested-dropdown">
                            <a href="#">GUARD PATROL ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">JWM High Tech</a>
                            </div>
                        </div>
                        <!-- HARD DRIVE -->
                        <div class="nested-dropdown">
                            <a href="#">HARD DRIVE ▶</a>
                            <div class="sub-dropdown">
                                <a href="#">WD WESTERN DIGITAL</a>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- News & Events Dropdown -->
                <li class="dropdown">
                    <a href="#">News & Events ▼</a>
                    <div class="dropdown-content">
                        <a href="honeywell-training.html">Honeywell Mid Segment FDAS & PAVA Basic Training & Product Updates</a>
                        <a href="ezviz-intro.html">EZVIZ - Product Introduction</a>
                    </div>
                </li>

                <!-- Support Dropdown -->
                <li class="dropdown">
                    <a href="#">Support ▼</a>
                    <div class="dropdown-content">
                        <a href="videos.html">Videos</a>
                        <a href="downloads.html">Download</a>
                        <a href="tools.html">Tools</a>
                    </div>
                </li>

                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;
});
