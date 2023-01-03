import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
	apiKey: "AIzaSyAfA-h95shrJLM80gWpWr2WPf9fBvwuv1g",
	version: "weekly",
});

loader.load().then(() => {
	const mapCanvas = document.getElementById("map");

	if (!mapCanvas) {
		return;
	}

	let map = {},
		markers = {};

	// map style
	const customMapType = new google.maps.StyledMapType(
		[
			{
				stylers: [{ visibility: "on" }, { hue: "#08ff00" }, { saturation: -70 }, { lightness: -10 }, { weight: 0.4 }, { gamma: 1.41 }],
			},
		],
		{
			name: "Custom",
		}
	);

	// map icons
	const icons = {
		list: {
			icon: {
				url: "img/map-marker.png",
				scaledSize: new google.maps.Size(24, 24),
				anchor: new google.maps.Point(12, 12),
			},
		},
		logo: {
			icon: {
				url: "img/map-marker-logo.png",
				scaledSize: new google.maps.Size(40, 40),
			},
		},
		active: {
			icon: {
				url: "img/map-marker-active.png",
				scaledSize: new google.maps.Size(48, 48),
				anchor: new google.maps.Point(24, 24),
			},
		},
	};

	/**
	 * Create a new map in the mapCanvas element
	 */
	let initMap = () => {
		map = new google.maps.Map(mapCanvas, {
			mapTypeId: "customStyle",
			mapTypeControlOptions: {
				mapTypeIds: ["roadmap", "customStyle"],
			},
		});
		map.mapTypes.set("customStyle", customMapType);
	};
	initMap();

	/**
	 * Display map with all properties icons
	 */
	let showAllPropertiesMap = () => {
		const items = document.querySelectorAll("[data-view=map]");
		items.forEach((i) => {
			i.addEventListener("click", () => {
				// set active icon and show property card
				let object = i.parentElement.closest(".property-list__item"),
					pId = object.getAttribute("id");
				displayPropertyOnMap(pId);
				// show map layer
				mapCanvas.style.left = 0;
				document.body.style.height = "100vh";
				document.body.style.overflowY = "hidden";
			});
		});
	};
	showAllPropertiesMap();

	/**
	 * Hide map with all properties icons
	 */
	let hideAllPropertiesMap = () => {
		const items = document.querySelectorAll("[data-view=map]");
		items.forEach((i) => {
			// set back pointer icon
			i.querySelector(".map-pointer").innerHTML = '<use xlink:href="#map-pointer"></use>';
		});
		// hide map layer
		mapCanvas.style.left = "";
		document.body.style.height = "";
		document.body.style.overflowY = "";
	};

	/**
	 * Add property locations to the current map
	 * @param {string} pId — property id (e.g. 'property-1234')
	 */
	let displayPropertyOnMap = (pId) => {
		resetMarkers();
		markers[pId].setIcon(icons["active"].icon);
		markers[pId].setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
		map.panTo(markers[pId].getPosition());

		let div = document.getElementById(pId),
			mapInfo = document.querySelector(".map__info");

		div.querySelector(".map-pointer").innerHTML = '<use xlink:href="#map-back"></use>';
		mapInfo.innerHTML = div.innerHTML;

		let close = mapInfo.querySelector("[data-view=map]");
		close.addEventListener("click", () => {
			mapInfo.innerHTML = "";
			hideAllPropertiesMap();
		});
	};

	/**
	 * Calculate map height on all properties page on map init and window resize
	 */
	let updateMapHeight = () => {
		if (mapCanvas.classList.contains("map__property-all")) {
			mapCanvas.style.height = `${window.innerHeight - mapCanvas.getBoundingClientRect().top}px`;
		}
	};

	/**
	 * Reset markers to default state
	 */
	let resetMarkers = () => {
		let elements = Object.keys(markers);
		elements.forEach((i) => {
			markers[i].setIcon(icons["list"].icon);
			markers[i].setZIndex(google.maps.Marker.MAX_ZINDEX - 1);
		});
	};

	/**
	 * Remove markers
	 */
	let clearMarkers = () => {
		let elements = Object.keys(markers);
		elements.forEach((i) => {
			markers[i].setMap(null);
		});
		markers = null;
	};

	/**
	 * Object list on map for all properties page
	 */
	const objects = document.querySelectorAll(".property-list__item");
	if (objects.length > 0) {
		const bounds = new google.maps.LatLngBounds(); // autocentering

		objects.forEach((i) => {
			let pId = i.getAttribute("id"),
				pLat = parseFloat(i.dataset.lat),
				pLng = parseFloat(i.dataset.lng);

			// if lat and lng are set
			if (pLat && pLng) {
				markers[pId] = new google.maps.Marker({
					id: pId,
					position: { lat: pLat, lng: pLng },
					icon: icons["list"].icon,
					map: map,
				});
				bounds.extend({ lat: pLat, lng: pLng });
			}

			// show property card and center map
			markers[pId].addListener("click", () => {
				displayPropertyOnMap(pId);
			});
		});

		// center map to fit all objects and calculate height for absolutely positioned map layer
		updateMapHeight();
		map.fitBounds(bounds);

		// calculate height on window resize
		window.onresize = () => {
			updateMapHeight();
			map.fitBounds(bounds);
		};
	}

	/**
	 * Single point address on contacts/property page
	 */
	if (mapCanvas.dataset.point) {
		let mapOptions = {
			mapTypeControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_CENTER,
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, "customStyle"],
			},
			fullscreenControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_RIGHT,
			},
		};
		let pointData = JSON.parse(mapCanvas.dataset.point),
			point = { lat: parseFloat(pointData.lat), lng: parseFloat(pointData.lng) },
			marker = new google.maps.Marker({
				position: point,
				icon: icons[pointData.icon].icon,
				map: map,
			});
		map.setZoom(15);
		map.setCenter(point);
		map.setOptions(mapOptions);
	}
});
