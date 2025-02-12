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
                    <a href="index.html">HOME ▼</a>
                    <div class="dropdown-content">
                        <a href="about.html">About Us</a>
                        <a href="partners.html">Partners</a>
                        <a href="dealer-form.html">Dealer Form</a>
                    </div>
                </li>

                <!-- Products Dropdown -->
                <li class="dropdown">
                    <a href="#">PRODUCTS ▼</a>
                    <div class="dropdown-content">
                        <div class="nested-dropdown">
                            <a href="#">HIKVISION ▶</a>
                            <div class="sub-dropdown">
                                <a href="/hikvision/turbo-hd-tvi-720p.html">TURBO HD TVI 720P</a>
                                <a href="/hikvison/turbo-hd-tvi-1080p.html">TURBO HD TVI 1080P</a>
                                <a href="/hikvision/colorvu.html">COLORVU</a>
                                <a href="/hikvision/hd1080p-audio-series.html">HD1080P AUDIO SERIES</a>
                                <a href="/hikvision/iot-pir-series.html">IOT/PIR SERIES</a>
                                <a href="/hikvision/ptz-speed-dome.html">PTZ SPEED DOME</a>
                                <a href="/hikvision/acusense-dvr.html">ACUSENSE DVR</a>
                                <a href="/hikvision/turbo-hd-dvr.html">TURBO HD DVR</a>
                                <a href="/hikvision/hikvision-kit.html">HIKVISION KIT</a>
                                <a href="/hikvision/hik-access-control.html">HIK ACCESS CONTROL</a>
                            </div>
                        </div>
                        <!-- AVTECH -->
                        <div class="nested-dropdown">
                            <a href="#">AVTECH ▶</a>
                            <div class="sub-dropdown">
                                <a href="/avtech/tvi-dome-camera.html">TVI DOME CAMERA</a>
                                <a href="/avtech/tvi-bullet-camera.html">TVI BULLET CAMERA</a>
                                <a href="/avtech/tvi-dvr-recorder.html">TVI DVR RECORDER</a>
                                <a href="/avtech/tvi-ptz-camera.html">TVI PTZ CAMERA</a>
                            </div>
                        </div>
                        <!-- DAHUA -->
                        <div class="nested-dropdown">
                            <a href="#">DAHUA ▶</a>
                            <div class="sub-dropdown">
                                <a href="/dahua/dome-camera.html">DOME CAMERA</a>
                                <a href="/dahua/bullet-camera.html">BULLET CAMERA</a>
                                <a href="/dahua/ptz-camera.html">PTZ CAMERA</a>
                                <a href="/dahua/nvr-recorder.html">NVR RECORDER</a>
                                <a href="/dahua/xvr-recorder.html">XVR RECORDER</a>
                                <a href="/dahua/networks.html">NETWORKS</a>
                                <a href="/dahua/pinhole-wireless.html">PINHOLE | WIRELESS</a>
                            </div>
                        </div>
                        <!-- RUIJIE | NETWORKS -->
                        <div class="nested-dropdown">
                            <a href="#">RUIJIE | NETWORKS ▶</a>
                            <div class="sub-dropdown">
                                <a href="/ruijie/reyee.html">REYEE</a>
                                <a href="/ruijie/ruijie.html">RUIJIE</a>
                                <a href="/ruijie/ruijie-kit.html">RUIJIE KIT</a>
                                <a href="/ruijie/ruijie-management.html">RUIJIE MANAGEMENT</a>
                                <a href="/ruijie/ruijie-accessories.html">RUIJIE ACCESSORIES</a>
                                <div class="nested-dropdown">
                            <a href="#">ZKTECO ▶</a>
                            <div class="sub-dropdown">
                                <a href="/ruijie/biometrics-access-control.html">BIOMETRICS & ACCESS CONTROL</a>
                            </div>
                            </div>
                            </div>
                        </div>
                        <!-- ROSSLARE -->
                        <div class="nested-dropdown">
                            <a href="#">ROSSLARE ▶</a>
                            <div class="sub-dropdown">
                                <a href="/rosslare/access-control.html">ACCESS CONTROL SYSTEM</a>
                            </div>
                        </div>
                        <!-- ITC AUDIO -->
                        <div class="nested-dropdown">
                            <a href="#">ITC AUDIO ▶</a>
                            <div class="sub-dropdown">
                                <a href="/itcaudio/itc-commercial.html">ITC COMMERCIAL AUDIO</a>
                            </div>
                        </div>
                        <!-- HONEYWELL -->
                        <div class="nested-dropdown">
                            <a href="#">HONEYWELL ▶</a>
                            <div class="sub-dropdown">
                                <a href="/honeywell/evaclite.html">EVACLITE</a>
                                <a href="/honeywell/compact.html">COMPACT PA</a>
                                <a href="/honeywell/loudspeaker.html">LOUD SPEAKER</a>
                                <a href="/honeywell/firelite.html">FIRELITE - UL LISTED PANEL</a>
                                <a href="/honeywell/morleydxc.html">MORLEY DXC - ADDRESSABLE</a>
                                <a href="/honeywell/morelylite.html">MORLEY LITE - ADDRESSABLE</a>
                                <a href="/honeywell/morleyul.html">MORLEY UL - ADDRESSABLE</a>
                            </div>
                        </div>
                        <!-- iHORN -->
                        <div class="nested-dropdown">
                            <a href="#">iHORN ▶</a>
                            <div class="sub-dropdown">
                                <a href="/ihorn/standalone.html">STANDALONE SMOKE DETECTOR</a>
                                <a href="/ihorn/wiredsmoke.html">WIRED SMOKE | HEAT DETECTOR</a>
                                <a href="/ihorn/beamdetector.html">BEAM DETECTOR | INFRARED HENCE</a>
                                <a href="/ihorn/wired.html">WIRED | WIRELESS GLASS DETECTOR</a>
                                <a href="/ihorn/wireless.html">WIRELESS DETECTORS</a>
                                <a href="/ihorn/wiredpir.html">WIRED PIR</a>
                            </div>
                        </div>
                        <!-- UBIQUITI -->
                        <div class="nested-dropdown">
                            <a href="#">UBIQUITI ▶</a>
                            <div class="sub-dropdown">
                                <a href="/ubiquiti/wireless.html">Wireless Ubiquiti</a>
                            </div>
                        </div>
                        <!-- EZVIZ NETWORK -->
                        <div class="nested-dropdown">
                            <a href="#">EZVIZ NETWORK ▶</a>
                            <div class="sub-dropdown">
                                <a href="/ezviz/ezviz.html">EZVIZ</a>
                            </div>
                        </div>
                        <!-- GUARD PATROL -->
                        <div class="nested-dropdown">
                            <a href="#">GUARD PATROL ▶</a>
                            <div class="sub-dropdown">
                                <a href="/guardpatrol/jwm.html">JWM High Tech</a>
                            </div>
                        </div>
                        <!-- HARD DRIVE -->
                        <div class="nested-dropdown">
                            <a href="#">HARD DRIVE ▶</a>
                            <div class="sub-dropdown">
                                <a href="/harddrive/wd.html">WD WESTERN DIGITAL</a>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- News & Events Dropdown -->
                <li class="dropdown">
                    <a href="#">NEWS & EVENTS ▼</a>
                    <div class="dropdown-content">
                        <a href="honeywell-training.html">Honeywell Mid Segment FDAS & PAVA Basic Training & Product Updates</a>
                        <a href="ezviz-intro.html">EZVIZ - Product Introduction</a>
                    </div>
                </li>

                <!-- Support Dropdown -->
                <li class="dropdown">
                    <a href="#">SUPPORT ▼</a>
                    <div class="dropdown-content">
                        <a href="videos.html">Videos</a>
                        <a href="downloads.html">Download</a>
                        <a href="tools.html">Tools</a>
                    </div>
                </li>

                <li><a href="blog.html">BLOG</a></li>
                <li><a href="contact.html">CONTACT US</a></li>
            </ul>
        </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;
});
