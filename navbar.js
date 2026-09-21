document.addEventListener("DOMContentLoaded", function () {

    const navbarHTML = `
        <nav class="navbar">

            <!-- LOGO -->
            <div class="logo">
                <a href="index.html">
                    <img src="assets/hye logo.png" alt="HYE Enterprises Corporation Logo">
                </a>
            </div>


            <!-- HAMBURGER BUTTON -->
            <button
                class="hamburger"
                id="hamburger"
                type="button"
                aria-label="Open navigation menu"
                aria-expanded="false"
                aria-controls="nav-links"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            <!-- NAVIGATION -->
            <ul class="nav-links" id="nav-links">

                <!-- =========================
                     HOME
                ========================== -->

                <li class="dropdown">

                    <a href="index.html" class="dropdown-toggle">
                        HOME
                        <span class="dropdown-arrow">▼</span>
                    </a>

                    <div class="dropdown-content">

                        <a href="index.html">
                            Home
                        </a>

                        <a href="about.html">
                            About Us
                        </a>

                        <a href="partners.html">
                            Partners
                        </a>

                        <a href="dealer-form.html">
                            Dealer Form
                        </a>

                    </div>

                </li>


                <!-- =========================
                     PRODUCTS
                ========================== -->

                <li class="dropdown">

                    <a href="products.html" class="dropdown-toggle">
                        PRODUCTS
                        <span class="dropdown-arrow">▼</span>
                    </a>


                    <div class="dropdown-content">


                        <!-- HIKVISION -->

                        <div class="nested-dropdown">

                            <a href="hikvision.html" class="nested-toggle">
                                HIKVISION
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/hikvision/turbo-hd-tvi-720p.html">
                                    TURBO HD TVI 720P
                                </a>

                                <a href="/hikvision/turbo-hd-tvi-1080p.html">
                                    TURBO HD TVI 1080P
                                </a>

                                <a href="/hikvision/colorvu.html">
                                    COLORVU
                                </a>

                                <a href="/hikvision/hd1080p-audio-series.html">
                                    HD1080P AUDIO SERIES
                                </a>

                                <a href="/hikvision/iot-pir-series.html">
                                    IOT/PIR SERIES
                                </a>

                                <a href="/hikvision/ptz-speed-dome.html">
                                    PTZ SPEED DOME
                                </a>

                                <a href="/hikvision/acusense-dvr.html">
                                    ACUSENSE DVR
                                </a>

                                <a href="/hikvision/turbo-hd-dvr.html">
                                    TURBO HD DVR
                                </a>

                                <a href="/hikvision/hikvision-kit.html">
                                    HIKVISION KIT
                                </a>

                                <a href="/hikvision/hik-access-control.html">
                                    HIK ACCESS CONTROL
                                </a>

                            </div>

                        </div>


                        <!-- AVTECH -->

                        <div class="nested-dropdown">

                            <a href="avtech.html" class="nested-toggle">
                                AVTECH
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/avtech/tvi-dome-camera.html">
                                    TVI DOME CAMERA
                                </a>

                                <a href="/avtech/tvi-bullet-camera.html">
                                    TVI BULLET CAMERA
                                </a>

                                <a href="/avtech/tvi-dvr-recorder.html">
                                    TVI DVR RECORDER
                                </a>

                                <a href="/avtech/tvi-ptz-camera.html">
                                    TVI PTZ CAMERA
                                </a>

                            </div>

                        </div>


                        <!-- DAHUA -->

                        <div class="nested-dropdown">

                            <a href="dahua.html" class="nested-toggle">
                                DAHUA
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/dahua/dome-camera.html">
                                    DOME CAMERA
                                </a>

                                <a href="/dahua/bullet-camera.html">
                                    BULLET CAMERA
                                </a>

                                <a href="/dahua/ptz-camera.html">
                                    PTZ CAMERA
                                </a>

                                <a href="/dahua/nvr-recorder.html">
                                    NVR RECORDER
                                </a>

                                <a href="/dahua/xvr-recorder.html">
                                    XVR RECORDER
                                </a>

                                <a href="/dahua/networks.html">
                                    NETWORKS
                                </a>

                                <a href="/dahua/pinhole-wireless.html">
                                    PINHOLE | WIRELESS
                                </a>

                            </div>

                        </div>


                        <!-- RUIJIE -->

                        <div class="nested-dropdown">

                            <a href="ruijie.html" class="nested-toggle">
                                RUIJIE | NETWORKS
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/ruijie/reyee.html">
                                    REYEE
                                </a>

                                <a href="/ruijie/ruijie.html">
                                    RUIJIE
                                </a>

                                <a href="/ruijie/ruijie-kit.html">
                                    RUIJIE KIT
                                </a>

                                <a href="/ruijie/ruijie-management.html">
                                    RUIJIE MANAGEMENT
                                </a>

                                <a href="/ruijie/ruijie-accessories.html">
                                    RUIJIE ACCESSORIES
                                </a>


                                <!-- ZKTECO -->

                                <div class="nested-dropdown">

                                    <a href="zkteco.html" class="nested-toggle">
                                        ZKTECO
                                        <span class="nested-arrow">▶</span>
                                    </a>

                                    <div class="sub-dropdown">

                                        <a href="/ruijie/biometrics-access-control.html">
                                            BIOMETRICS & ACCESS CONTROL
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <!-- ROSSLARE -->

                        <div class="nested-dropdown">

                            <a href="rosslare.html" class="nested-toggle">
                                ROSSLARE
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/rosslare/access-control.html">
                                    ACCESS CONTROL SYSTEM
                                </a>

                            </div>

                        </div>


                        <!-- ITC AUDIO -->

                        <div class="nested-dropdown">

                            <a href="itc-audio.html" class="nested-toggle">
                                ITC AUDIO
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/itcaudio/itc-commercial.html">
                                    ITC COMMERCIAL AUDIO
                                </a>

                            </div>

                        </div>


                        <!-- HONEYWELL -->

                        <div class="nested-dropdown">

                            <a href="honeywell.html" class="nested-toggle">
                                HONEYWELL
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/honeywell/evaclite.html">
                                    EVACLITE
                                </a>

                                <a href="/honeywell/compact.html">
                                    COMPACT PA
                                </a>

                                <a href="/honeywell/loudspeaker.html">
                                    LOUD SPEAKER
                                </a>

                                <a href="/honeywell/firelite.html">
                                    FIRELITE - UL LISTED PANEL
                                </a>

                                <a href="/honeywell/morleydxc.html">
                                    MORLEY DXC - ADDRESSABLE
                                </a>

                                <a href="/honeywell/morelylite.html">
                                    MORLEY LITE - ADDRESSABLE
                                </a>

                                <a href="/honeywell/morleyul.html">
                                    MORLEY UL - ADDRESSABLE
                                </a>

                            </div>

                        </div>


                        <!-- IHORN -->

                        <div class="nested-dropdown">

                            <a href="ihorn.html" class="nested-toggle">
                                iHORN
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/ihorn/standalone.html">
                                    STANDALONE SMOKE DETECTOR
                                </a>

                                <a href="/ihorn/wiredsmoke.html">
                                    WIRED SMOKE | HEAT DETECTOR
                                </a>

                                <a href="/ihorn/beamdetector.html">
                                    BEAM DETECTOR | INFRARED HENCE
                                </a>

                                <a href="/ihorn/wired.html">
                                    WIRED | WIRELESS GLASS DETECTOR
                                </a>

                                <a href="/ihorn/wireless.html">
                                    WIRELESS DETECTORS
                                </a>

                                <a href="/ihorn/wiredpir.html">
                                    WIRED PIR
                                </a>

                            </div>

                        </div>


                        <!-- UBIQUITI -->

                        <div class="nested-dropdown">

                            <a href="ubiquiti.html" class="nested-toggle">
                                UBIQUITI
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/ubiquiti/wireless.html">
                                    Wireless Ubiquiti
                                </a>

                            </div>

                        </div>


                        <!-- EZVIZ -->

                        <div class="nested-dropdown">

                            <a href="ezviz-network.html" class="nested-toggle">
                                EZVIZ NETWORK
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/ezviz/ezviz.html">
                                    EZVIZ
                                </a>

                            </div>

                        </div>


                        <!-- GUARD PATROL -->

                        <div class="nested-dropdown">

                            <a href="guard-patrol.html" class="nested-toggle">
                                GUARD PATROL
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/guardpatrol/jwm.html">
                                    JWM High Tech
                                </a>

                            </div>

                        </div>


                        <!-- HARD DRIVE -->

                        <div class="nested-dropdown">

                            <a href="hard-drive.html" class="nested-toggle">
                                HARD DRIVE
                                <span class="nested-arrow">▶</span>
                            </a>

                            <div class="sub-dropdown">

                                <a href="/harddrive/wd.html">
                                    WD WESTERN DIGITAL
                                </a>

                            </div>

                        </div>

                    </div>

                </li>


                <!-- =========================
                     NEWS & EVENTS
                ========================== -->

                <li class="dropdown">

                    <a href="news-events.html" class="dropdown-toggle">
                        NEWS & EVENTS
                        <span class="dropdown-arrow">▼</span>
                    </a>

                    <div class="dropdown-content">

                        <a href="honeywell-training.html">
                            Honeywell Mid Segment FDAS & PAVA Basic Training
                            & Product Updates
                        </a>

                        <a href="ezviz-intro.html">
                            EZVIZ - Product Introduction
                        </a>

                    </div>

                </li>


                <!-- =========================
                     SUPPORT
                ========================== -->

                <li class="dropdown">

                    <a href="#" class="dropdown-toggle">
                        SUPPORT
                        <span class="dropdown-arrow">▼</span>
                    </a>

                    <div class="dropdown-content">

                        <a href="videos.html">
                            Videos
                        </a>

                        <a href="downloads.html">
                            Download
                        </a>

                        <a href="tools.html">
                            Tools
                        </a>

                    </div>

                </li>


                <!-- =========================
                     BLOG
                ========================== -->

                <li>
                    <a href="blog.html">
                        BLOG
                    </a>
                </li>


                <!-- =========================
                     CONTACT
                ========================== -->

                <li>
                    <a href="contact.html">
                        CONTACT US
                    </a>
                </li>

            </ul>

        </nav>
    `;


    /* =====================================================
       INSERT NAVBAR
    ====================================================== */

    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) {
        return;
    }

    navbarContainer.innerHTML = navbarHTML;


    /* =====================================================
       GET ELEMENTS
    ====================================================== */

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    const dropdownToggles =
        document.querySelectorAll(".dropdown-toggle");

    const nestedToggles =
        document.querySelectorAll(".nested-toggle");


    /* =====================================================
       HAMBURGER MENU
    ====================================================== */

    hamburger.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        hamburger.classList.toggle("active", isOpen);

        hamburger.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    /* =====================================================
       MOBILE MAIN DROPDOWNS
    ====================================================== */

    dropdownToggles.forEach(function (toggle) {

        toggle.addEventListener("click", function (event) {

            if (window.innerWidth <= 768) {

                const parent =
                    this.closest(".dropdown");

                const dropdown =
                    parent.querySelector(":scope > .dropdown-content");

                /*
                    On mobile:
                    First tap opens dropdown.
                    Second tap can follow the link.
                */

                if (
                    dropdown &&
                    !parent.classList.contains("mobile-open")
                ) {

                    event.preventDefault();

                    /* Close other main dropdowns */

                    document
                        .querySelectorAll(".dropdown.mobile-open")
                        .forEach(function (item) {

                            if (item !== parent) {
                                item.classList.remove("mobile-open");
                            }

                        });


                    parent.classList.add("mobile-open");

                }

            }

        });

    });


    /* =====================================================
       MOBILE NESTED DROPDOWNS
    ====================================================== */

    nestedToggles.forEach(function (toggle) {

        toggle.addEventListener("click", function (event) {

            if (window.innerWidth <= 768) {

                const parent =
                    this.closest(".nested-dropdown");

                const subDropdown =
                    parent.querySelector(":scope > .sub-dropdown");


                if (
                    subDropdown &&
                    !parent.classList.contains("mobile-open")
                ) {

                    event.preventDefault();

                    /*
                        Close sibling nested dropdowns
                    */

                    const parentContainer =
                        parent.parentElement;

                    parentContainer
                        .querySelectorAll(
                            ":scope > .nested-dropdown.mobile-open"
                        )
                        .forEach(function (item) {

                            if (item !== parent) {
                                item.classList.remove("mobile-open");
                            }

                        });


                    parent.classList.add("mobile-open");

                }

            }

        });

    });


    /* =====================================================
       CLOSE MENU AFTER CLICKING NORMAL MOBILE LINKS
    ====================================================== */

    navLinks.addEventListener("click", function (event) {

        if (window.innerWidth > 768) {
            return;
        }

        const clickedLink =
            event.target.closest("a");

        if (!clickedLink) {
            return;
        }


        /*
            Do not close when opening a dropdown.
        */

        if (
            clickedLink.classList.contains("dropdown-toggle") ||
            clickedLink.classList.contains("nested-toggle")
        ) {
            return;
        }


        closeMobileMenu();

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ====================================================== */

    document.addEventListener("click", function (event) {

        if (window.innerWidth > 768) {
            return;
        }

        const navbar =
            document.querySelector(".navbar");

        if (
            navLinks.classList.contains("active") &&
            !navbar.contains(event.target)
        ) {
            closeMobileMenu();
        }

    });


    /* =====================================================
       RESET WHEN SCREEN CHANGES TO DESKTOP
    ====================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            closeMobileMenu();

            document
                .querySelectorAll(".mobile-open")
                .forEach(function (item) {

                    item.classList.remove("mobile-open");

                });

        }

    });


    /* =====================================================
       CLOSE MOBILE MENU FUNCTION
    ====================================================== */

    function closeMobileMenu() {

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");

    }

});