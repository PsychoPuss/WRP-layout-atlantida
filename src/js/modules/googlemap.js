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
				url: "/img/map-marker.png",
				scaledSize: new google.maps.Size(24, 24),
				anchor: new google.maps.Point(12, 12),
			},
		},
		logo: {
			icon: {
				url: "/img/map-marker-logo.png",
				scaledSize: new google.maps.Size(40, 40),
			},
		},
		active: {
			icon: {
				url: "/img/map-marker-active.png",
				scaledSize: new google.maps.Size(48, 48),
				anchor: new google.maps.Point(24, 24),
			},
		},
	};

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

	let showAllPropertiesMap = () => {
		const items = document.querySelectorAll("[data-view=map]");
		items.forEach((i) => {
			i.addEventListener("click", () => {
				// show layer
				mapCanvas.style.left = 0;
				document.body.style.height = "100vh";
				document.body.style.overflowY = "hidden";
				// set active icon and show property card
				let object = i.parentElement.closest(".property-list__item"),
					pId = object.getAttribute("id");
				displayPropertyOnMap(pId);
			});
		});
	};
	showAllPropertiesMap();

	let updateMapHeight = () => {
		mapCanvas.style.height = `${window.innerHeight - mapCanvas.getBoundingClientRect().top}px`;
	};

	let getMarkers = () => {
		return markers;
	};

	let refreshMaps = () => {
		clearMarkers();
		// set_property_index_markers(jQuery(".property-nugget"));
	};

	let resetMarkers = () => {
		let elements = Object.keys(markers);
		elements.forEach((i) => {
			markers[i].setIcon(icons["list"].icon);
			markers[i].setZIndex(google.maps.Marker.MAX_ZINDEX - 1);
		});
	};

	let clearMarkers = () => {
		let elements = Object.keys(markers);
		elements.forEach((i) => {
			markers[i].setMap(null);
		});
		markers = null;
	};

	let displayPropertyOnMap = (pId) => {
		resetMarkers();
		markers[pId].setIcon(icons["active"].icon);
		markers[pId].setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
		map.panTo(markers[pId].getPosition());
	};

	/**
	 *
	 *
	 *
	 *
	 */
	// objects list
	const objects = document.querySelectorAll(".property-list__item");

	//! если есть список объектов
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
				// $("[data-view=map]").removeClass("active");
				// mapToggle = $("#" + sPropid + " [data-view=map]");
				// mapToggle.addClass("active");

				// показать карточку
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

	// office address on contacts page
	if (mapCanvas.dataset.office) {
		let officeData = JSON.parse(mapCanvas.dataset.office),
			office = { lat: parseFloat(officeData.lat), lng: parseFloat(officeData.lng) },
			marker = new google.maps.Marker({
				position: office,
				icon: icons["logo"].icon,
				map: map,
			});
		map.setZoom(15);
		map.setCenter(office);
	}
});
